(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const a={btnMenu:document.querySelector(".btn-menu"),headerEl:document.querySelector(".header"),headerCustomersEl:document.querySelector(".header-customers"),yearEl:document.querySelector(".year"),heroSection:document.querySelector(".hero"),menuEl:document.querySelector(".news-menu"),linkEl:document.querySelector(".news-text-subtitle"),modalEl:document.querySelector(".modal"),overlayEl:document.querySelector(".overlay"),closeBtn:document.querySelector(".close-modal"),newsTextEl:document.querySelector(".modal-news-text"),newsTitleEl:document.querySelector(".modal-news-title")},{btnMenu:m,headerEl:f,headerCustomersEl:C,yearEl:y,heroSection:h,linkEl:x,modalEl:s,overlayEl:l,closeBtn:E,menuEl:L,newsTextEl:O,newsTitleEl:p}=a,v=new Date().getFullYear();y.textContent=v;m.addEventListener("click",w);L.addEventListener("click",g);E.addEventListener("click",i);l.addEventListener("click",i);document.addEventListener("keydown",b);function w(){f.classList.toggle("nav-open-js")}const S=new IntersectionObserver(function(o){const n=o[0];n.isIntersecting||document.body.classList.add("sticky"),n.isIntersecting&&document.body.classList.remove("sticky")},{root:null,threshold:0,rootMargin:"-80px"});S.observe(h);function g(o){const n=o.target;n.tagName==="H3"&&(s.classList.remove("hidden"),l.classList.remove("hidden"),p.textContent=`${n.textContent}`)}function i(){s.classList.add("hidden"),l.classList.add("hidden")}function b(o){o.code==="Escape"&&!s.classList.contains("hidden")&&i()}const c=document.querySelector(".scrollup__btn"),q=function(){window.scrollY<300?c.classList.add("hidden"):c.classList.remove("hidden")};window.addEventListener("scroll",q);c.addEventListener("click",k);function k(){window.scrollTo({top:0,behavior:"smooth"})}
