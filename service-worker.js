"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","05359f2f7dc6ba3c42a2acc26acb7efe"],["service-worker.js","0585e6942cf18da6f86d943c06fc9d05"],["static/css/app.7285d80fe424607728b12dc5245cfec5.css","7285d80fe424607728b12dc5245cfec5"],["static/css/aw.css","8736ff52563554d38724b6c3425d028a"],["static/css/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["static/css/main.css","085eeb544aaae75cc6e1717869b5db55"],["static/css/noscript.css","4150579155f7477c6c6aba9fb34dc72c"],["static/js/app.71e1667f6c30087c3f11.js","aa5a97f460138554f4b8e75d2865cca5"],["static/js/aw.js","21d596d0380608ad12a0241de0892807"],["static/js/firebaseconfig.js","cabef8a5740f39203aa7353945ee071e"],["static/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["static/js/jquery.scrollex.min.js","f89065e3d988006af9791b44561d7c90"],["static/js/jquery.scrolly.min.js","1ed5a78bde1476875a40f6b9ff44fc14"],["static/js/main.js","695dd65a9771a3f767474130c692d339"],["static/js/manifest.39d3ab3d02a151e75d96.js","1784373f33f095012eb0f5ff63798bc0"],["static/js/skel.min.js","93140e29fa68bab55ce6eae874ae674d"],["static/js/util.js","fd2716a7b68ce7748c9676787b61db43"],["static/js/vendor.73a4bfd5d4d8031cb1ef.js","4bbab05e08659e486d374616f1351481"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),s=createCacheKey(a,hashParamName,n,!1);return[a.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});