if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,f)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const o=e=>n(e,s),d={module:{uri:s},exports:c,require:o};i[s]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(f(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"9f1f2c940b7c5314ac572f9e2b6d3e7e"},{url:"android-chrome-512x512.png",revision:"44e729092c0c725bd10df27c1f9d5752"},{url:"apple-touch-icon.png",revision:"ab820bc5ff6c03938b085230fa79ad1f"},{url:"assets/index-5ec77fdd.js",revision:null},{url:"assets/index-b63819bf.css",revision:null},{url:"assets/react-e2b499e0.svg",revision:null},{url:"assets/tailwind-53c07491.svg",revision:null},{url:"assets/vite-36394976.svg",revision:null},{url:"favicon-16x16.png",revision:"a4cfb0f5de63fd2f954b1ea8a6849c63"},{url:"favicon-32x32.png",revision:"53fc772f15d9fa6650253fd60957e319"},{url:"favicon.ico",revision:"6417d4f9d3c202f52d74e28d9f38887e"},{url:"favicon.svg",revision:"55ca27b1246d0a049f1901f922807c67"},{url:"index.html",revision:"f338d51f62bf6f0ec1180767b6b39272"},{url:"pwa-192x192.png",revision:"9f1f2c940b7c5314ac572f9e2b6d3e7e"},{url:"pwa-512x512.png",revision:"44e729092c0c725bd10df27c1f9d5752"},{url:"registerSW.js",revision:"e24012f5faa3578b328d61b410bf791f"},{url:"favicon.ico",revision:"6417d4f9d3c202f52d74e28d9f38887e"},{url:"apple-touch-icon.png",revision:"ab820bc5ff6c03938b085230fa79ad1f"},{url:"pwa-192x192.png",revision:"9f1f2c940b7c5314ac572f9e2b6d3e7e"},{url:"pwa-512x512.png",revision:"44e729092c0c725bd10df27c1f9d5752"},{url:"manifest.webmanifest",revision:"7d635b00618383b3ca79730d2dfd7dab"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
