import{i as u,a as f}from"./assets/vendor-fd67715c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function y(s){return s.map(({webformatURL:o,largeImageURL:a,tags:l,likes:e,views:t,comments:r,downloads:h})=>`
   <div class="galleryItem-wrapper">
        <div class="galleryCard-wrapper">
            <li class="gallery_items">
                <a href="${a}">
                <img src="${o}" alt="${l}" class="galleryItems-photo"></a>
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
                            <p>${h}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>
    </div>`).join("")}const g=document.querySelector(".gallery-list"),L=document.querySelector(".loadMoreBtn");function m(s,o){const a="42986246-3ae10d3224d15127557fd6ee9",l="https://pixabay.com/api/",e=new URLSearchParams({key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15});(async()=>(await f.get(`${l}?${e}`)).data)().then(r=>{r.total||u.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),g.insertAdjacentHTML("beforeend",y(r.hits))}).catch(r=>{u.error({title:r,position:"topRight",message:"Oops! Something went wrong!"})}).finally(()=>{loader.hidden=!0,setTimeout(()=>{L.hidden=!1},0)})}const p=document.querySelector(".search-form");document.querySelector(".gallery");const S=document.querySelector(".gallery-list"),n=document.querySelector(".loader"),c=document.querySelector(".loadMoreBtn");p.addEventListener("submit",P);c.addEventListener("click",$);n.hidden=!0;c.hidden=!0;let d=1,i;function P(s){s.preventDefault(),S.innerHTML="",n.hidden=!1;const{searchRequest:o}=s.currentTarget.elements;return i=o.value,m(i),p.reset(),i}function $(){d+=1,n.hidden=!1,c.hidden=!0,m(i,d)}
//# sourceMappingURL=commonHelpers.js.map
