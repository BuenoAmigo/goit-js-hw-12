import{i as c,S,a as L}from"./assets/vendor-063017c3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function w(s){return s.map(({webformatURL:o,largeImageURL:i,tags:l,likes:e,views:t,comments:r,downloads:p})=>`
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
                            <p>${t}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Comments</h2>
                            <p>${r}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Downloads</h2>
                            <p>${p}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>
    </div>`).join("")}const q=document.querySelector(".search-form");document.querySelector(".gallery");const v=document.querySelector(".gallery-list"),y=document.querySelector(".loadMoreBtn");let u=0;function d(s,o){const i="42986246-3ae10d3224d15127557fd6ee9",l="https://pixabay.com/api/",e=new URLSearchParams({key:i,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15});(async()=>(await L.get(`${l}?${e}`)).data)().then(r=>{if(r.total||c.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),u-r.totalHits)u+=Number(r.hits.length);else{u=0,q.reset(),c.info({message:"We're sorry, but you've reached the end of search results."}),setTimeout(()=>{y.hidden=!0},20);return}v.insertAdjacentHTML("beforeend",w(r.hits)),new S(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",widthRatio:.9,heightRatio:.8}).refresh()}).catch(r=>{c.error({title:r,position:"topRight",message:"Oops! Something went wrong!"})}).finally(()=>{loader.hidden=!0,setTimeout(()=>{y.hidden=!1},0)})}const g=document.querySelector(".search-form"),P=document.querySelector(".gallery-list"),h=document.querySelector(".loader"),m=document.querySelector(".loadMoreBtn");g.addEventListener("submit",$);m.addEventListener("click",b);h.hidden=!0;m.hidden=!0;let n=1,a;function $(s){s.preventDefault(),P.innerHTML="",h.hidden=!1;const{searchRequest:o}=s.currentTarget.elements;return a=o.value,d(a),g.reset(),a}function b(){n+=1,h.hidden=!1,m.hidden=!0,d(a,n)?d(a,n):n=1}const f=document.querySelector(".galleryCard-wrapper");if(f){const o=f.getBoundingClientRect().height;window.scrollBy({top:o+o*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map