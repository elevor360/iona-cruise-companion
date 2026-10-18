const CACHE='iona-v17-20261019';
const ASSETS=['./','./index.html','./style.css?v=17','./app.js?v=17','./manifest.webmanifest','./icon.svg','./venues.json','./advert-settings.json','./information.json'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;event.respondWith(fetch(event.request,{cache:'no-store'}).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,copy)))}return response}).catch(()=>caches.match(event.request)))});
