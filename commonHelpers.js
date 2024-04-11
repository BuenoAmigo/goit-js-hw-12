import{a as P,S as q,i as a}from"./assets/vendor-063017c3.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function y(t,i){const o="42986246-3ae10d3224d15127557fd6ee9",n="https://pixabay.com/api/",e=new URLSearchParams({key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:15});return(await P.get(`${n}?${e}`)).data}function L(t){return t.map(({webformatURL:i,largeImageURL:o,tags:n,likes:e,views:r,comments:s,downloads:M})=>`
   <div class="galleryItem-wrapper">
        <div class="galleryCard-wrapper">
            <li class="gallery_items">
                <a href="${o}">
                <img src="${i}" alt="${n}" class="galleryItems-photo"></a>
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
                            <p>${s}</p>
                        </li>
                        <li class="galleryItem">
                            <h2>Downloads</h2>
                            <p>${M}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>
    </div>`).join("")}const R=document.querySelector(".search-form"),f=document.querySelector(".gallery-list"),v=document.querySelector(".loader"),g=document.querySelector(".loadMoreBtn"),S=document.querySelector('input[type="text"]'),p=document.querySelector(".go-TopIMG");let b=new q(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",widthRatio:.9,heightRatio:.8}),l,h,u=1,c;w();d();R.addEventListener("submit",$);function $(t){t.preventDefault(),l=S.value.trim(),m(),y(l),l||a.error({title:err,position:"topRight",message:"Oops! Input must not be empty!"}),y(l).then(o=>{m(),d(),h=o.totalHits,i(o.hits),E(),o.total||(a.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),f.innerHTML=""),o.total&&I(),f.insertAdjacentHTML("beforeend",L(o.hits)),b.refresh(),w()}).catch(o=>{a.error({title:o,position:"topRight",message:"Oops! Something went wrong!"})});function i(o){c=0;for(let n in o)c+=1;return c}}g.addEventListener("click",B);function B(){d(),m(),u+=1,u*c>=h&&(d(),a.info({message:"We're sorry, but you've reached the end of search results."})),y(l,u).then(t=>{f.insertAdjacentHTML("beforeend",L(t.hits)),b.refresh(),H(),I()}).catch(t=>{console.dir(t),a.error({title:t,position:"topRight",message:t.message})}).finally(()=>{w(),u*c>=h&&d()})}function m(){v.style.display="block"}function w(){v.style.display="none"}function I(){g.style.display="block"}function d(){g.style.display="none"}function E(){return S.value=""}function H(){const t=document.querySelector(".galleryCard-wrapper");if(t){const i=t.getBoundingClientRect().height;window.scrollBy({top:i*2,left:0,behavior:"smooth"})}}p.style.display="none";window.addEventListener("scroll",function(){window.scrollY>300?p.style.display="block":p.style.display="none"});p.addEventListener("click",O);function O(){window.scrollY>0&&window.scrollTo({top:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
