"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","482b2887f09d254d238defe332bbb08e"],["/static/css/main.de848a8a.css","c3b0ef4e0c3497684f8ce7f808e446cb"],["/static/js/main.ade7b368.js","05caa4c81a460fd8c96d59571eea54d0"],["/static/media/MazeCreater.76f42bba.png","76f42bba75cb83ea0a3414bd75868d0a"],["/static/media/MazeRunner.4133e0e8.png","4133e0e865e08501edaa0dcf4bdeca42"],["/static/media/TillingBlock.7774641f.png","7774641f97258027ebe3012f2faaffda"],["/static/media/XO_AI.4c1ea4b3.png","4c1ea4b3fb5e2906da14b720ce8c2b78"],["/static/media/barcamp.930a9fcf.png","930a9fcfa404cba2f5ba03577dce6594"],["/static/media/chayen.fd9f7e02.png","fd9f7e02ede9fd211f3a02b18e2c966f"],["/static/media/git-pull-request.6d8eaed9.png","6d8eaed97e1422737855c76880bec3fe"],["/static/media/instagram.9ec13986.png","9ec13986de07d60c3913e4beb092a871"],["/static/media/localhackday.1edac9ca.png","1edac9ca3714932f7303704e6f6cd38b"],["/static/media/remec.27e547c9.png","27e547c9314b927a433d7b19be2f55e2"],["/static/media/repo-push.8b2cb5e0.ico","8b2cb5e0850838ae1e5e0ef4accfe6e0"],["/static/media/spinner.90806073.gif","9080607321ab98fa3e70dd24b2513a20"],["/static/media/xo.b04d59f8.gif","b04d59f8c0fe76accfd2c3c4dadbc467"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});