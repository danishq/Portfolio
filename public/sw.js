// Danish Qureshi Portfolio - Native Service Worker (Phase 1)
// Handles local notifications and notification click navigation

const CACHE_NAME = 'dq-portfolio-v1';

self.addEventListener('install', (event) => {
  // Activate immediately without waiting for existing tabs to close
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Claim control over all open clients immediately
  event.waitUntil(self.clients.claim());
});

// Handle local / demo notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const targetPath = event.notification.data?.url || '/#projects';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // If a window is already open, focus it and navigate
      for (const client of clientList) {
        if ('focus' in client) {
          client.focus();
          if ('navigate' in client && targetPath) {
            client.navigate(targetPath);
          }
          return;
        }
      }
      // Otherwise open a new window
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetPath);
      }
    })
  );
});

// Optional message listener for testing communication
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PING') {
    event.ports[0]?.postMessage({ status: 'PONG', timestamp: Date.now() });
  }
});
