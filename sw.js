if(!self.define){let e,i={};const n=(n,f)=>(n=new URL(n+".js",f).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(f,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const d=e=>n(e,c),s={module:{uri:c},exports:o,require:d};i[c]=Promise.all(f.map((e=>s[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"9f1f2c940b7c5314ac572f9e2b6d3e7e"},{url:"android-chrome-512x512.png",revision:"44e729092c0c725bd10df27c1f9d5752"},{url:"apple-touch-icon.png",revision:"ab820bc5ff6c03938b085230fa79ad1f"},{url:"assets/index-47b75693.js",revision:null},{url:"assets/index-dac708b1.css",revision:null},{url:"favicon-16x16.png",revision:"a4cfb0f5de63fd2f954b1ea8a6849c63"},{url:"favicon-32x32.png",revision:"53fc772f15d9fa6650253fd60957e319"},{url:"favicon.ico",revision:"6417d4f9d3c202f52d74e28d9f38887e"},{url:"favicon.svg",revision:"55ca27b1246d0a049f1901f922807c67"},{url:"index.html",revision:"bc787e0da5354351746745f6656b7229"},{url:"pwa-192x192.png",revision:"9f1f2c940b7c5314ac572f9e2b6d3e7e"},{url:"pwa-512x512.png",revision:"44e729092c0c725bd10df27c1f9d5752"},{url:"registerSW.js",revision:"e24012f5faa3578b328d61b410bf791f"},{url:"favicon.ico",revision:"6417d4f9d3c202f52d74e28d9f38887e"},{url:"apple-touch-icon.png",revision:"ab820bc5ff6c03938b085230fa79ad1f"},{url:"pwa-192x192.png",revision:"9f1f2c940b7c5314ac572f9e2b6d3e7e"},{url:"pwa-512x512.png",revision:"44e729092c0c725bd10df27c1f9d5752"},{url:"manifest.webmanifest",revision:"7d635b00618383b3ca79730d2dfd7dab"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
