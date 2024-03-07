const cacheName="Hypercritical-offline";self.addEventListener("install",(e=>{console.log("Service-worker:installed"),e.waitUntil(self.skipWaiting())})),self.addEventListener("activate",(e=>{console.log("Service-worker:activated"),e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>{if(e!==cacheName)return console.log("Service worker: clearing old cache"),caches.delete(e)})))))),e.waitUntil(clients.claim())})),self.addEventListener("fetch",(e=>{e.respondWith(fetch(e.request).then((t=>{if(200===t.status&&!e.request.url.startsWith("chrome-extension://")){const c=t.clone();caches.open(cacheName).then((t=>{t.put(e.request,c)}))}return t})).catch((t=>caches.match(e.request).then((e=>e)).then(console.log("Error:",t)))))}));