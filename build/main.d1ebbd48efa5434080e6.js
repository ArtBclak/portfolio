(()=>{var t={457:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});const n={id:"facebook_8f397329f0a64667cb41bc62af87f73d-usage",viewBox:"0 0 512 512",url:i.p+"assets/sprite.svg#facebook_8f397329f0a64667cb41bc62af87f73d-usage",toString:function(){return this.url}}},228:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});const n={id:"github_4f317f4cadb8fc49c6dbc40258f56775-usage",viewBox:"0 0 24 24",url:i.p+"assets/sprite.svg#github_4f317f4cadb8fc49c6dbc40258f56775-usage",toString:function(){return this.url}}},803:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});const n={id:"instagram_8bbfc7f0978ec72351fbc87f9c3fd0a3-usage",viewBox:"0 0 24 24",url:i.p+"assets/sprite.svg#instagram_8bbfc7f0978ec72351fbc87f9c3fd0a3-usage",toString:function(){return this.url}}},175:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});const n={id:"linkedin_79f037cfa16f0c4f9ac7c966b062bf1c-usage",viewBox:"0 -0.5 25 25",url:i.p+"assets/sprite.svg#linkedin_79f037cfa16f0c4f9ac7c966b062bf1c-usage",toString:function(){return this.url}}},264:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});const n={id:"mail_500d560038abca9ccf05704093d83b10-usage",viewBox:"0 0 24 24",url:i.p+"assets/sprite.svg#mail_500d560038abca9ccf05704093d83b10-usage",toString:function(){return this.url}}},224:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});const n={id:"telegram_8959b7cd1bf45269d7a024acd2401cff-usage",viewBox:"0 0 24 24",url:i.p+"assets/sprite.svg#telegram_8959b7cd1bf45269d7a024acd2401cff-usage",toString:function(){return this.url}}},363:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});const n={id:"whatsapp_9167ce48f86da3a46689650d8e7047f0-usage",viewBox:"0 0 24 24",url:i.p+"assets/sprite.svg#whatsapp_9167ce48f86da3a46689650d8e7047f0-usage",toString:function(){return this.url}}},527:(t,e,i)=>{var n={"./facebook.svg":457,"./github.svg":228,"./instagram.svg":803,"./linkedin.svg":175,"./mail.svg":264,"./telegram.svg":224,"./whatsapp.svg":363};function o(t){var e=r(t);return i(e)}function r(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=r,t.exports=o,o.id=527}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{"use strict";var t=document.querySelector(".header__hamburger"),e=document.querySelector(".header__nav"),n=document.querySelector(".header__nav-list"),o=document.querySelectorAll(".header__nav-link"),r=document.querySelectorAll("section"),a=document.querySelector(".home__next");document.addEventListener("DOMContentLoaded",(function(){var s,c,g,l,u,d,f,m,p,v,h,b,_,k,w,S,y,j,x;l=i(527),u={},d=document.querySelectorAll(".svg"),l.keys().forEach((function(t){var e=t.match(/\.\/(.+)\.svg$/)[1];u[e]=l(t).default})),d.forEach((function(t){var e=t.getAttribute("data-id")||"";u[e]&&(t.innerHTML='<use xlink:href="'.concat(u[e],'"></use>'))})),f=document.getElementById("years"),m=document.getElementById("days"),p=document.getElementById("hours"),v=new Date("April 1, 2020"),h=(new Date).getTime()-v.getTime(),b=Math.floor(h/31536e6),_=Math.floor(h%31536e6/864e5),k=Math.floor(h%864e5/36e5),f&&m&&p&&(f.textContent=b.toString(),m.textContent=_.toString(),p.textContent=k.toString()),w=[{name:"Html",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png",link:"https://en.wikipedia.org/wiki/HTML"},{name:"Css",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png",link:"https://en.wikipedia.org/wiki/CSS"},{name:"JavaScript",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/70px-Unofficial_JavaScript_logo_2.svg.png",link:"https://en.wikipedia.org/wiki/JavaScript"},{name:"TypeScript",img:"https://www.typescriptlang.org/favicon.ico",link:"https://www.typescriptlang.org/"},{name:"React.js",img:"https://react.dev/favicon.ico",link:"https://react.dev/"},{name:"Redux",img:"https://redux.js.org/img/favicon/favicon.ico",link:"https://redux.js.org/"},{name:"Webpack",img:"https://webpack.js.org/icon_180x180.png",link:"https://webpack.js.org/"},{name:"Sass",img:"https://sass-lang.com/favicon.ico",link:"https://sass-lang.com/"},{name:"MUI",img:"https://mui.com/favicon.ico",link:"https://mui.com/"},{name:"Three.js",img:"https://threejs.org/favicon.ico",link:"https://threejs.org/"},{name:"Next.js",img:"https://nextjs.org/favicon.ico",link:"https://nextjs.org/"},{name:"Node.js",img:"https://nodejs.org/favicon.ico",link:"https://nodejs.org/"},{name:"Express.js",img:"https://expressjs.com/images/favicon.png",link:"https://expressjs.com/"},{name:"MongoDB",img:"https://www.mongodb.com/favicon.ico",link:"https://www.mongodb.com/"},{name:"Socket",img:"https://socket.io/images/favicon.png",link:"https://socket.io/"},{name:"Jest",img:"https://jestjs.io/img/jest.png",link:"https://jestjs.io/"},{name:"Git",img:"https://git-scm.com/favicon.png",link:"https://git-scm.com/"},{name:"Figma",img:"https://static.figma.com/app/icon/1/favicon.svg",link:"https://www.figma.com/"}],(S=document.querySelector(".work__skills"))&&w&&w.forEach((function(t){S.innerHTML+='\n            <a class="work__skills-link" href="'.concat(t.link,'" target="_blank" title="').concat(t.name,'">                    \n                <img class="work__skills-img" src="').concat(t.img,'" loading="lazy" alt="').concat(t.img,'" >\n                ').concat(t.name,"\n            </a>\n        ")})),y=document.querySelector(".contact__form"),j=document.querySelector(".contact__form-subject"),x=document.querySelector(".contact__form-message"),y&&y.addEventListener("submit",(function(t){t.preventDefault();var e=j.value,i=x.value;if(""!==e.trim()&&""!==i.trim()){var n="mailto:".concat("0960469634kvstrt@gmail.com","?subject=").concat(encodeURIComponent(e),"&body=").concat(encodeURIComponent(i));window.location.href=n}else alert("Please enter a form.")})),s=function(t){t.scrollIntoView({behavior:"smooth",block:"start"})},c=function(){t.classList.toggle("header__hamburger--active"),e.classList.toggle("header__nav--active")},t&&e&&t.addEventListener("click",(function(){c()})),n&&n.addEventListener("click",(function(t){var e=t.target;if("A"===e.tagName&&r){t.preventDefault();var i=e.getAttribute("href");r.forEach((function(t){"#"+t.id===i&&s(t)})),c()}})),a&&a.addEventListener("click",(function(){return s(r[1])})),g=new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&(o.forEach((function(e,i){var n=r[i].id;e.getAttribute("href")==="#"+t.target.id?(e.classList.add("header__nav-link--active"),r[i].classList.add(n+"--active")):(e.classList.remove("header__nav-link--active"),r[i].classList.remove(n+"--active"))})),e.observe(t.target))}))}),{root:null,rootMargin:"-50%"}),r.forEach((function(t){g.observe(t)}))}))})()})();