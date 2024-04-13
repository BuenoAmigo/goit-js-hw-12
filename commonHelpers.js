import{a as q,S as E,i as c}from"./assets/vendor-063017c3.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function w(t,n){const r="42986246-3ae10d3224d15127557fd6ee9",i="https://pixabay.com/api/",e=new URLSearchParams({key:r,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:15});return(await q.get(`${i}?${e}`)).data}function L(t){return t.map(({webformatURL:n,largeImageURL:r,tags:i,likes:e,views:o,comments:l,downloads:P})=>`
   <div class="galleryItem-wrapper">
        <div class="galleryCard-wrapper">
            <li class="gallery_items">
                <a href="${r}">
                <img src="${n}" alt="${i}" class="galleryItems-photo"></a>
                <div class="gallery-textWrapper">
                    <ul class="galleryItems-list">
                        <li class="galleryItem">
                            <h2>Likes</h2>
                            <p>${e}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Views</h2>
                            <p>${o}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Comments</h2>
                            <p>${l}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Downloads</h2>
                            <p>${P}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>
    </div>`).join("")}const R=document.querySelector(".search-form"),d=document.querySelector(".gallery-list"),v=document.querySelector(".loader"),m=document.querySelector(".loadMoreBtn"),b=document.querySelector('input[type="text"]'),f=document.querySelector(".go-TopIMG");let S=new E(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",widthRatio:.9,heightRatio:.8}),g,I,h,a=1,p,y;u();s();R.addEventListener("submit",T);function T(t){if(t.preventDefault(),s(),a=1,g=b.value.trim(),y=g,d.innerHTML="",!y){c.warning({position:"topRight",message:"Oops! Input must not be empty!"});return}M(),w(y).then(r=>{if(s(),h=r.totalHits,I=n(r.hits),B(),!r.totalHits){c.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d.innerHTML="",u();return}r.totalHits&&(d.insertAdjacentHTML("beforeend",L(r.hits)),S.refresh(),u(),H())}).catch(r=>{c.error({title:"Error",position:"topRight",message:r.message}),u()});function n(r){p=0;for(let i in r)p+=1;return p}}m.addEventListener("click",$);function $(){s(),M(),a+=1,a*I>=h&&(s(),c.info({message:"We're sorry, but you've reached the end of search results."})),w(y,a).then(t=>{d.insertAdjacentHTML("beforeend",L(t.hits)),S.refresh(),O(),H()}).catch(t=>{console.dir(t),c.error({title:t,position:"topRight",message:t.message})}).finally(()=>{u(),a*p>=h&&s()})}function M(){v.style.display="block"}function u(){v.style.display="none"}function H(){m.style.display="block"}function s(){m.style.display="none"}function B(){return b.value=""}function O(){const t=document.querySelector(".galleryCard-wrapper");if(t){const n=t.getBoundingClientRect().height;window.scrollBy({top:n*2,left:0,behavior:"smooth"})}}f.style.display="none";window.addEventListener("scroll",function(){window.scrollY>300?f.style.display="block":f.style.display="none"});f.addEventListener("click",A);function A(){window.scrollY>0&&window.scrollTo({top:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
