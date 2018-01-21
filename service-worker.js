"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","1ccd72708cd8acd8b92fedaad6411abc"],["/static/css/main.07329419.css","2d1888b0fae7f5b6fabd6f89dbe7ac1d"],["/static/js/main.c2663c8c.js","202a70c41b780b670be4c58bb3be42d5"],["/static/media/bcbk1.bc62be55.png","bc62be552b655c6b1a63301d2c3de8ef"],["/static/media/bcbk2.453cfba3.png","453cfba38129ea544cf85f54dc336e4c"],["/static/media/disas2.41ef1470.jpg","41ef1470426b9917e43264f9bcf84599"],["/static/media/disas3.5d7e8ab8.jpg","5d7e8ab8f36686549a7b0becebbb1076"],["/static/media/disas5.67460c07.jpg","67460c07e85c322adedd523b13819a38"],["/static/media/localhackday1.fe518610.jpg","fe518610af865f67bc7acc303e33cd38"],["/static/media/localhackday2.9a36d363.jpg","9a36d3631b231149706a13dedd407f68"],["/static/media/localhackday3.1edac9ca.png","1edac9ca3714932f7303704e6f6cd38b"],["/static/media/localhackday4.a187547b.jpg","a187547b48cd4f1746fa4c1baf822d35"],["/static/media/remec1.b186c37f.png","b186c37f3459a77ba19e33aea0ab3df8"],["/static/media/remec2.ea5bb6ca.png","ea5bb6ca960f02db4b47cf8c2e66b3a2"],["/static/media/remec3.ccb3aeaf.png","ccb3aeaf484e766b3ba47ad04c73cd1e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var c="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});