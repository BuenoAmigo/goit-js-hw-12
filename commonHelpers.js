import{i as n,a as y}from"./assets/vendor-fd67715c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function h(o){return o.map(({webformatURL:s,largeImageURL:a,tags:l,likes:e,views:t,comments:r,downloads:f})=>`
   <div class="galleryItem-wrapper">
        <div class="galleryCard-wrapper">
            <li class="gallery_items">
                <a href="${a}">
                <img src="${s}" alt="${l}" class="galleryItems-photo"></a>
                <div class="gallery-textWrapper">
                    <ul class="galleryItems-list">
                        <li class="galleryItem">
                            <h2>Likes</h2>
                            <p>${e}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Views</h2>
                            <p>${t}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Comments</h2>
                            <p>${r}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Downloads</h2>
                            <p>${f}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>
    </div>`).join("")}const g=document.querySelector(".gallery-list");function u(o,s){const a="42986246-3ae10d3224d15127557fd6ee9",l="https://pixabay.com/api/",e=new URLSearchParams({key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15});(async()=>(await y.get(`${l}?${e}`)).data)().then(r=>{r.total||n.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),g.insertAdjacentHTML("beforeend",h(r.hits))}).catch(r=>{n.error({title:r,position:"topRight",message:"Oops! Something went wrong!"})}).finally(()=>loader.hidden=!0)}const d=document.querySelector(".search-form");document.querySelector(".gallery");const L=document.querySelector(".gallery-list"),p=document.querySelector(".loader"),m=document.querySelector(".loadMoreBtn");d.addEventListener("submit",S);m.addEventListener("click",P);p.hidden=!0;let c=1,i;function S(o){o.preventDefault(),L.innerHTML="",p.hidden=!1;const{searchRequest:s}=o.currentTarget.elements;return i=s.value,u(i),m.hidden=!1,d.reset(),i}function P(){c+=1,u(i,c)}
//# sourceMappingURL=commonHelpers.js.map
