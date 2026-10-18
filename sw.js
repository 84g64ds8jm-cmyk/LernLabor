const V='lernlabor-v19',FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{if(n.ok&&(new URL(e.request.url).origin===location.origin||/fonts\.(googleapis|gstatic)\.com/.test(e.request.url))){const c=n.clone();caches.open(V).then(x=>x.put(e.request,c))}return n}).catch(()=>caches.match('index.html'))))});
