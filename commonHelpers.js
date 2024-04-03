import{i as c,a as g}from"./assets/vendor-fd67715c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function L(s){return s.map(({webformatURL:o,largeImageURL:i,tags:l,likes:e,views:r,comments:t,downloads:y})=>`
   <div class="galleryItem-wrapper">
        <div class="galleryCard-wrapper">
            <li class="gallery_items">
                <a href="${i}">
                <img src="${o}" alt="${l}" class="galleryItems-photo"></a>
                <div class="gallery-textWrapper">
                    <ul class="galleryItems-list">
                        <li class="galleryItem">
                            <h2>Likes</h2>
                            <p>${e}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Views</h2>
                            <p>${r}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Comments</h2>
                            <p>${t}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Downloads</h2>
                            <p>${y}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>
    </div>`).join("")}const S=document.querySelector(".gallery-list"),h=document.querySelector(".loadMoreBtn");let n=0;function p(s,o){const i="42986246-3ae10d3224d15127557fd6ee9",l="https://pixabay.com/api/",e=new URLSearchParams({key:i,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:100});(async()=>(await g.get(`${l}?${e}`)).data)().then(t=>{console.log(t),t.total||c.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n-t.totalHits?(n+=Number(t.hits.length),console.log(`Total hits: ${n}`),console.dir(t.totalHits)):(c.info({message:"We're sorry, but you've reached the end of search results."}),setTimeout(()=>{h.hidden=!0},20),n=0),S.insertAdjacentHTML("beforeend",L(t.hits))}).catch(t=>{c.error({title:t,position:"topRight",message:"Oops! Something went wrong!"})}).finally(()=>{loader.hidden=!0,setTimeout(()=>{h.hidden=!1},0)})}const f=document.querySelector(".search-form");document.querySelector(".gallery");const $=document.querySelector(".gallery-list"),u=document.querySelector(".loader"),d=document.querySelector(".loadMoreBtn");f.addEventListener("submit",v);d.addEventListener("click",P);u.hidden=!0;d.hidden=!0;let m=1,a;function v(s){s.preventDefault(),$.innerHTML="",u.hidden=!1;const{searchRequest:o}=s.currentTarget.elements;return a=o.value,p(a),f.reset(),a}function P(){m+=1,u.hidden=!1,d.hidden=!0,p(a,m)}
//# sourceMappingURL=commonHelpers.js.map
