// R&P Music service worker — makes the app work offline after first visit.
// Strategy:
//  - GET requests for the app shell, icons, fonts, piano samples, CDN libs
//    → cache-first (fast; safe because they're immutable or change rarely)
//  - GET /api/published and /api/songs → network-first, fallback to cache
//    (so when the user loses connection they can still access songs they
//     already browsed)
//  - Auth + mutation endpoints (login, logout, auth check, security stats,
//    writes) → always go to the network, never cached
//  - Non-GET requests → passthrough (never cached)
//
// Bumping CACHE_VERSION invalidates old caches on the next activate.

// Two caches:
//  - CACHE_VERSION (bumped each release) holds the app shell. Wiped on each
//    new SW activate so the user always gets the latest HTML/JS.
//  - SAMPLES_CACHE is stable across releases. Holds the 2 MB of piano samples
//    so we don't re-download them on every deploy (was making phone reloads
//    feel slow). Bump SAMPLES_CACHE_VERSION only if a sample file changes.
const CACHE_VERSION = 'rap-music-v237';
const SAMPLES_CACHE = 'rap-music-samples-v1';

// IMPORTANT: every URL here must resolve WITHOUT a redirect. cache.add()
// follows redirects and stores the response with `redirected: true`, and
// browsers (Chromium + Safari) block such cached responses from being
// served to navigation requests for security reasons. That bug took down
// /keyboard for a whole afternoon — see commit history around v224-v228.
// Use the canonical, post-redirect path here ("/keyboard/" not "/keyboard").
const PRECACHE_URLS = [
  '/',
  '/keyboard/',
  '/library/',
  '/icon.png',
  '/icon.svg',
  '/manifest.json',
  '/landing/icon.png',
  '/public/celebration.mp3',
];

// Piano samples live in their own stable cache and load lazily — first play
// of each note populates the cache via the fetch handler.
const SAMPLES_PATH_PREFIX = '/public/piano/';

// Paths that must never be served from cache — always need a live check.
const NEVER_CACHE_PATHS = [
  '/api/login',
  '/api/logout',
  '/api/auth',
  '/api/security-stats',
  '/api/check-admin',
  '/api/verify-pin',
  '/api/state',     // session state writes
  '/api/mkdir',
  '/api/directory',
  '/api/browse',
  '/api/publish',
  '/api/unpublish',
  '/api/restore',
  '/api/trash',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      // addAll is atomic — if any URL fails, the whole precache fails. Use
      // per-URL adds instead so a missing optional asset doesn't break the
      // install (e.g. dev without all samples downloaded yet).
      Promise.all(
        PRECACHE_URLS.map((url) =>
          cache.add(url).catch((err) => {
            // Swallow errors so install still succeeds.
            console.warn('[SW] precache skip:', url, err && err.message);
          })
        )
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        // Keep both the current shell cache and the samples cache; purge
        // everything else (old shell versions, retired sample caches).
        keys.filter((k) => k !== CACHE_VERSION && k !== SAMPLES_CACHE)
            .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only intercept GET — POST/PUT/DELETE always hit the network.
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Only handle same-origin requests; let cross-origin (e.g. Google Fonts,
  // external CDNs) follow their own cache headers.
  if (url.origin !== self.location.origin) return;

  // Never cache auth / write paths.
  if (NEVER_CACHE_PATHS.some((p) => url.pathname.startsWith(p))) return;

  // Piano samples → cache-first against the stable samples cache. First fetch
  // populates it; future loads skip the network and survive shell-cache bumps.
  if (url.pathname.startsWith(SAMPLES_PATH_PREFIX)) {
    event.respondWith(
      caches.open(SAMPLES_CACHE).then((cache) =>
        cache.match(req).then((cached) => {
          if (cached) return cached;
          return fetch(req).then((res) => {
            if (res && res.ok && res.status === 200) {
              cache.put(req, res.clone());
            }
            return res;
          });
        })
      )
    );
    return;
  }

  // /api/published and /api/songs → network-first, fallback to cache.
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || new Response(
          JSON.stringify({ error: 'Offline and not cached' }),
          { status: 503, headers: { 'Content-Type': 'application/json' } }
        )))
    );
    return;
  }

  // Everything else → cache-first, falling through to network.
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.ok && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => cached || Response.error());
    })
  );
});
