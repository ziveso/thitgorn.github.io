"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/thitgorn.github.io/index.html","2a19e92c66390b053cbcc18fb33eee16"],["/thitgorn.github.io/static/css/main.9649ed4d.css","3888d40b97c0c4996408c2a2e24e60ee"],["/thitgorn.github.io/static/js/main.d92361b6.js","a013845b12f8a792392517d3419723e5"],["/thitgorn.github.io/static/media/MazeCreater.76f42bba.png","76f42bba75cb83ea0a3414bd75868d0a"],["/thitgorn.github.io/static/media/MazeRunner.4133e0e8.png","4133e0e865e08501edaa0dcf4bdeca42"],["/thitgorn.github.io/static/media/TillingBlock.7774641f.png","7774641f97258027ebe3012f2faaffda"],["/thitgorn.github.io/static/media/XO_AI.4c1ea4b3.png","4c1ea4b3fb5e2906da14b720ce8c2b78"],["/thitgorn.github.io/static/media/barcamp.930a9fcf.png","930a9fcfa404cba2f5ba03577dce6594"],["/thitgorn.github.io/static/media/chayen.fd9f7e02.png","fd9f7e02ede9fd211f3a02b18e2c966f"],["/thitgorn.github.io/static/media/git-pull-request.6d8eaed9.png","6d8eaed97e1422737855c76880bec3fe"],["/thitgorn.github.io/static/media/grass.d32079e4.png","d32079e4822d8108bd829160d3aa0902"],["/thitgorn.github.io/static/media/instagram.9ec13986.png","9ec13986de07d60c3913e4beb092a871"],["/thitgorn.github.io/static/media/localhackday.1edac9ca.png","1edac9ca3714932f7303704e6f6cd38b"],["/thitgorn.github.io/static/media/rabbitstale.dd6f1465.jpg","dd6f1465b21777ca80a82280ef091761"],["/thitgorn.github.io/static/media/remec.27e547c9.png","27e547c9314b927a433d7b19be2f55e2"],["/thitgorn.github.io/static/media/repo-push.8b2cb5e0.ico","8b2cb5e0850838ae1e5e0ef4accfe6e0"],["/thitgorn.github.io/static/media/spinner.90806073.gif","9080607321ab98fa3e70dd24b2513a20"],["/thitgorn.github.io/static/media/xo.b04d59f8.gif","b04d59f8c0fe76accfd2c3c4dadbc467"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});