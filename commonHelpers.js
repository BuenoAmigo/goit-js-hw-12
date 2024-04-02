import{S as p,i as a}from"./assets/vendor-acbca2f4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function y(o){const r=document.querySelector(".gallery"),s=o.map(({webformatURL:e,largeImageURL:t,tags:l,likes:u,views:d,comments:m,downloads:h})=>`
   <div class="galleryItem-wrapper">
        <div class="galleryCard-wrapper">
            <li class="gallery_items">
                <a href="${t}">
                <img src="${e}" alt="${l}" class="galleryItems-photo"></a>
                <div class="gallery-textWrapper">
                    <ul class="galleryItems-list">
                        <li class="galleryItem">
                            <h2>Likes</h2>
                            <p>${u}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Views</h2>
                            <p>${d}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Comments</h2>
                            <p>${m}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Downloads</h2>
                            <p>${h}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>
    </div>`).join("");r.insertAdjacentHTML("afterbegin",s),new p(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",widthRatio:.9,heightRatio:.8}).refresh()}function f(o){const r="42986246-3ae10d3224d15127557fd6ee9",s="https://pixabay.com/api/",i=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`${s}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{e.total||a.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),y(e.hits)}).catch(e=>{a.error({title:"Error",position:"topRight",message:"Oops! Something went wrong!"})}).finally(()=>loader.hidden=!0)}const n=document.querySelector(".search-form"),g=document.querySelector(".gallery"),c=document.querySelector(".loader");n.addEventListener("submit",L);c.hidden=!0;function L(o){o.preventDefault(),g.innerHTML="",c.hidden=!1;const{searchRequest:r}=o.currentTarget.elements;let s=r.value;f(s),n.reset()}
//# sourceMappingURL=commonHelpers.js.map
