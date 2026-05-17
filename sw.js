// EMERGENCY KILL-SWITCH SERVICE WORKER (2026-04-27, third deployment) — v335
//
// Phones / browsers got stuck behind cached HTML or a broken SW
// payload and /keyboard would render a white screen even after a
// reload. This SW does nothing useful on fetch — it just unregisters
// itself and wipes every Cache Storage entry, then reloads any open
// tabs in scope. Any browser that fetches sw.js will pick this up
// and self-clean on its next navigation.
//
// Once we're confident every device is clean, we can re-introduce
// the real cache-first SW.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    } catch (e) { /* ignore */ }
    try {
      await self.registration.unregister();
    } catch (e) { /* ignore */ }
    try {
      const clients = await self.clients.matchAll({ includeUncontrolled: true });
      clients.forEach((c) => { try { c.navigate(c.url); } catch (e) {} });
    } catch (e) { /* ignore */ }
  })());
});

// No fetch handler → browser's default (direct network) handles all
// requests. This SW will be unregistered on activate, but until then
// requests pass through cleanly.
