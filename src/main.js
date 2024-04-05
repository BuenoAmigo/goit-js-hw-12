
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import "izitoast/dist/css/iziToast.min.css";

import onSearch from "./js/pixabay-api";

const form = document.querySelector(".search-form");
const galleryList = document.querySelector(".gallery-list");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".loadMoreBtn");
let currentHits = 0;


form.addEventListener("submit", onFormSubmit);
loadMoreBtn.addEventListener("click", loadMorePictures)
loader.hidden = true;
loadMoreBtn.hidden = true;
let currentPage = 1;
let searchQuery;

function onFormSubmit(evt) {
    evt.preventDefault();
    currentHits = 0;
    galleryList.innerHTML = "";
    loader.hidden = false;
    const { searchRequest } = evt.currentTarget.elements;
    searchQuery = searchRequest.value;
    onSearch(searchQuery);
    form.reset();
    return searchQuery
}

function loadMorePictures() {
    currentPage += 1;
    loader.hidden = false;
    loadMoreBtn.hidden = true;

    if (!onSearch(searchQuery, currentPage)) {
        currentPage = 1;
    }
    else { onSearch(searchQuery, currentPage) };
}

const galleryCard = document.querySelector('.galleryCard-wrapper');

if (galleryCard) {
    const cardRect = galleryCard.getBoundingClientRect();
    const cardHeight = cardRect.height;

    window.scrollBy({
        top: cardHeight + cardHeight * 2,
        left: 0,
        behavior: 'smooth'
    });
}