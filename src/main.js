
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import "izitoast/dist/css/iziToast.min.css";

import onSearch from "./js/pixabay-api";

const form = document.querySelector(".search-form");
const galleryContainer = document.querySelector(".gallery");
const galleryList = document.querySelector(".gallery-list");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".loadMoreBtn")

form.addEventListener("submit", onFormSubmit);
loadMoreBtn.addEventListener("click", loadMorePictures)
loader.hidden = true;
let currentPage = 1;
let searchQuery;
let searchData;
let queryTotalPages = 1;

function onFormSubmit(evt) {
    evt.preventDefault();
    galleryList.innerHTML = "";
    loader.hidden = false;
    const { searchRequest } = evt.currentTarget.elements;
    searchQuery = searchRequest.value;
    onSearch(searchQuery);
    loadMoreBtn.hidden = false;
    form.reset();
    return searchQuery
}

function loadMorePictures() {
    currentPage += 1;
    onSearch(searchQuery, currentPage);
    // queryTotalPages = Math.ceil(searchQuery)

}
// new SimpleLightbox('.gallery a',
//     {
//         captionsData: 'alt',
//         captionDelay: 250,
//         captionPosition: 'bottom',
//         widthRatio: 0.9,
//         heightRatio: 0.8,
//     });


// gallery.refresh()
