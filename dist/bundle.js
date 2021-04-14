(()=>{"use strict";const e=function(e){var t=e.timing,n=e.draw,o=e.duration,i=performance.now();requestAnimationFrame((function e(r){var a=(r-i)/o;a>1&&(a=1);var s=t(a);n(s),a<1&&requestAnimationFrame(e)}))};function t(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const i=new(function(){function e(t){var n=t.main,o=t.wrap,i=t.next,r=t.prev,a=t.infinity,s=void 0!==a&&a,l=t.position,c=void 0===l?0:l,u=t.slidesToShow,d=void 0===u?3:u,m=t.responsive;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n||o||console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(i),this.prev=document.querySelector(r),this.slidesToShow=d,this.options={position:c,infinity:s,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=m}var i,r;return i=e,(r=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var e,n=function(e,n){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=t(e))){o&&(e=o);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==o.return||o.return()}finally{if(l)throw a}}}}(this.slides);try{for(n.s();!(e=n.n()).done;)e.value.classList.add("glo-slider__item")}catch(e){n.e(e)}finally{n.f()}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent="\n    .glo-slider {\n      overflow: hidden !important;\n    };\n    .glo-slider__wrap {\n      display: flex !important;\n      transition: transform .5s !important;\n      will-change: transform !important;\n    }\n    .glo-slider__item {\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n      margin: auto 0 !important;\n    }\n    "),this.wrap.style.display="flex",document.head.append(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.append(this.prev),this.main.append(this.next);var e=document.createElement("style");e.textContent="\n    .glo-slider__prev,\n    .glo-slider__next {\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n    }\n    .glo-slider__prev {\n        border-right-color: #19b5fe;\n    }\n    .glo-slider__next {\n        border-left-color: #19b5fe;\n    }\n    .glo-slider__prev:hover,\n    .glo-slider__next:hover,\n    .glo-slider__prev:focus,\n    .glo-slider__next:focus {\n        background: transparent;\n        outline: none;\n    }\n    ",document.head.append(e)}},{key:"responseInit",value:function(){var e,o=this,i=this.slidesToShow,r=this.responsive.map((function(e){return e.breakpoint})),a=Math.max.apply(Math,function(e){if(Array.isArray(e))return n(e)}(e=r)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=function(){o.options.widthSlide=Math.floor(100/o.slidesToShow),o.addStyle()},l=function(){var e=document.documentElement.clientWidth;if(e<a)for(var t=0;t<r.length;t++)e<r[t]&&(o.slidesToShow=o.responsive[t].slideToShow,s());else o.slidesToShow=i,s()};l(),window.addEventListener("resize",l)}}])&&o(i.prototype,r),e}())({main:".companies-wrapper",wrap:".companies-hor",slidesToShow:3,infinity:!0,responsive:[{breakpoint:992,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]});var r,a,s,l,c,u,d,m,p,f,v,h,y,g,S,w,b,q,E,_,x,L,k,A,T,C,I,M,j,z,D,O,P,B,$;D="2021-04-09",O=document.querySelector("#timer-hours"),P=document.querySelector("#timer-minutes"),B=document.querySelector("#timer-seconds"),$=function(e){return e<=9?"0"+e:e},function e(){var t,n,o,i=(t=(new Date(D).getTime()-(new Date).getTime())/1e3,n=Math.floor(t%60),o=Math.floor(t/60%60),{timeRemaining:t,hours:Math.floor(t/60/60),minutes:o,seconds:n});B.textContent=$(i.seconds),P.textContent=$(i.minutes),O.textContent=$(i.hours),i.timeRemaining<=0?(B.textContent="00",P.textContent="00",O.textContent="00"):i.timeRemaining>0&&setTimeout(e),clearInterval()}(),_=document.querySelectorAll('a[href="#service-block"]'),x=document.querySelector('a[href="#portfolio"]'),L=document.querySelector('a[href="#calc"]'),k=document.querySelector('a[href="#command"]'),A=document.querySelector('a[href="#connect"]'),T=document.querySelector("#service-block"),C=document.querySelector("#portfolio"),I=document.querySelector("#calc"),M=document.querySelector("#command"),j=document.querySelector("#connect"),(z=function(e,t){e.addEventListener("click",(function(e){e.preventDefault(),t.scrollIntoView({behavior:"smooth"})}))})(_[0],T),z(_[1],T),z(x,C),z(L,I),z(k,M),z(A,j),function(){var e=document.querySelector("body"),t=document.querySelector("menu");e.addEventListener("click",(function(e){var o=e.target;if(o.closest(".menu"))n();else if(o.classList.contains("close-btn"))n();else if("A"===o.tagName&&o.closest("menu"))n();else{if(o.closest("menu"))return;t.classList.remove("active-menu")}}));var n=function(){t.classList.toggle("active-menu")}}(),b=document.querySelector(".popup"),q=document.querySelectorAll(".popup-btn"),E=document.querySelector(".popup-content"),q.forEach((function(t){t.addEventListener("click",(function(){b.style.display="block",window.screen.width>768?e({duration:200,timing:function(e){return e},draw:function(e){E.style.top=250*e+"px"}}):(b.style.display="block",E.style.transform="")}))})),b.addEventListener("click",(function(e){var t=document.getElementById("form3-name"),n=document.getElementById("form3-phone"),o=document.getElementById("form3-email"),i=e.target;i.classList.contains("popup-close")?(b.style.display="none",t.value="",n.value="",o.value=""):(i=i.closest(".popup-content"))||(b.style.display="none",t.value="",n.value="",o.value="")})),g=document.querySelector(".service-header"),S=g.querySelectorAll(".service-header-tab"),w=document.querySelectorAll(".service-tab"),g.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&S.forEach((function(e,n){e===t&&function(e){for(var t=0;t<w.length;t++)e===t?(S[t].classList.add("active"),w[t].classList.remove("d-none")):(S[t].classList.remove("active"),w[t].classList.add("d-none"))}(n)}))})),u=document.querySelectorAll(".portfolio-item"),d=document.querySelector(".portfolio-content"),m=document.querySelectorAll(".dot"),p=0,f=function(e,t,n){e[t].classList.remove(n)},v=function(e,t,n){e[t].classList.add(n)},h=function(){f(u,p,"portfolio-item-active"),f(m,p,"dot-active"),++p>=u.length&&(p=0),v(u,p,"portfolio-item-active"),v(m,p,"dot-active")},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;c=setInterval(h,e)},d.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".portfolio-btn, .dot")&&(f(u,p,"portfolio-item-active"),f(m,p,"dot-active"),t.matches("#arrow-right")?p++:t.matches("#arrow-left")?p--:t.matches(".dot")&&m.forEach((function(e,n){e===t&&(p=n)})),p>=u.length&&(p=0),p<0&&(p=u.length-1),v(u,p,"portfolio-item-active"),v(m,p,"dot-active"))})),d.addEventListener("mouseover",(function(e){var t=e.target;(t.matches(".portfolio-btn")||t.matches(".dot"))&&clearInterval(c)})),d.addEventListener("mouseout",(function(e){var t=e.target;(t.matches(".portfolio-btn")||t.matches(".dot"))&&y()})),u.forEach((function(){var e=document.querySelector(".portfolio-dots"),t=document.createElement("li");t.classList.add("dot"),e.append(t)})),(m=document.querySelectorAll(".dot")).forEach((function(e){e.classList.contains("dot-active")||(f(m,p,"dot-active"),v(m,p,"dot-active"))})),y(2e3),s=document.querySelectorAll(".command__photo"),l=[],s.forEach((function(e){l.push(e.src)})),s.forEach((function(e,t){e.addEventListener("mouseover",(function(e){var t=e.target;t.src=t.dataset.img})),e.addEventListener("mouseout",(function(e){var n=e.target;"mouseout"===e.type&&(n.src=l[t])}))})),r=document.querySelectorAll("input.calc-item"),a=document.querySelector("body"),r.forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[\D/]/g,"")}))})),a.addEventListener("input",(function(e){var t=e.target;"user_name"===t.name?(t.value=t.value.replace(/[a-z\d/.,:;-=()\]!@#$%^&*_`\[+<>"№?]/gi,""),t.value=t.value.trim().slice(0,1).toUpperCase()+t.value.trim().slice(1).toLowerCase()):"user_email"===t.name?t.value=t.value.replace(/[^\w\s+/@\-\.]|()(?=\!)/gi,""):"user_phone"===t.name?t.value=t.value.replace(/[a-zа-я\s/.,!@#$%^&\]=*<>\["№?:;{}|_~`]/gi,"").trim():"user_message"===t.name&&(t.value=t.value.replace(/[a-z]/gi,""))})),a.addEventListener("focusout",(function(e){var t=e.target,n=document.querySelectorAll(".form-btn"),o=function(e){n.forEach((function(t){t.disabled=e}))};"tel"===t.type?(t.value.length<7||t.value.length>12)&&o(!0):"text"===t.type&&t.value.length<2&&o(!0),"user_name"===t.name?(t.value=t.value.replace(/[a-z\d/.,:;-=()\]!@#$%^&*_`\[+<>"№?]/gi,""),t.value=t.value.trim().slice(0,1).toUpperCase()+t.value.trim().slice(1).toLowerCase()):"user_email"===t.name?t.value=t.value.replace(/[^\w\s+/@\-\.]|()(?=\!)/gi,""):"user_phone"===t.name?t.value=t.value.replace(/[a-zа-я\s/.,!@#$%^&\]=*<>\["№?:;{}|_~`]/gi,"").trim():"user_message"===t.name&&(t.value=t.value.replace(/[a-z]/gi,""))})),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),i=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),s=document.getElementById("total"),l=function(){var n=0,l=1,c=1,u=+i.value,d=o.options[o.selectedIndex].value;r.value>1&&(l+=(r.value-1)/10),a.value&&a.value<5?c*=2:a.value&&a.value<10&&(c*=1.5),d&&u&&(n=t*u*d*l*c),e({duration:2e3,timing:function(e){return e},draw:function(e){s.textContent=Math.floor(e*n)}})};n.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&l()}))}(),function(){var e=document.querySelectorAll("form"),t=document.createElement("div");e.forEach((function(o){o.addEventListener("submit",(function(i){i.preventDefault();var r=document.querySelector(".preloader"),a=new FormData(o),s={};r.style.display="block",o.append(t),a.forEach((function(e,t){s[t]=e})),n(s).then((function(){setTimeout((function(){r.style.display="none",e.forEach((function(e){e.reset()})),t.textContent="Ваша заявка отправлена! Мы с вами свяжемся!",t.style.color="#fff"}),3e3),setTimeout((function(){t.textContent=""}),5e3),setTimeout((function(){document.querySelector(".popup").style.display="none"}),5500)})).catch((function(e){t.textContent="Что то пошло не так...",console.error(e)}))}))}));var n=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}}(),i.init()})();