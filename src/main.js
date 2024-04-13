import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import "izitoast/dist/css/iziToast.min.css";

import onSearch from "./js/pixabay-api";
import { createGalleryMarkup } from "./js/render-functions";

const form = document.querySelector(".search-form");
const galleryList = document.querySelector(".gallery-list");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".loadMoreBtn");
const inputData = document.querySelector('input[type="text"]');
const goTopBtn = document.querySelector(".go-TopIMG");

let gallery = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
        widthRatio: 0.9,
        heightRatio: 0.8,
    });
let searchQuery;
let currentGalleryLength;
let totalPages;
let currentHits;
let currentPage = 1;
let currentLenght;
let currentQuery;

loaderHidden();
loadMoreBtnHidden();
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    loadMoreBtnHidden();
    currentPage = 1;
    searchQuery = inputData.value.trim();
    currentQuery = searchQuery;
    galleryList.innerHTML = "";
    if (!currentQuery) {
        iziToast.warning({
            position: "topRight",
            message: "Oops! Input must not be empty!",
        });
        return
    }
    loaderShow();
    onSearch(currentQuery).then(data => {
        loadMoreBtnHidden();
        currentHits = data.totalHits;
        currentGalleryLength = findArrLenght(data.hits);
        totalPages = Math.ceil(currentHits / currentGalleryLength);
        cleanInput();
        if (!data.totalHits) {
            iziToast.error({
                title: "Error",
                position: "topRight",
                message: "Sorry, there are no images matching your search query. Please try again!",
            });
            galleryList.innerHTML = "";
            loaderHidden();
            return
        };
        if (data.totalHits) {
            galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup(data.hits));
            gallery.refresh();
            loaderHidden();
            loadMoreBtnShow();
        }
    }).catch(err => {
        iziToast.error({
            title: "Error",
            position: "topRight",
            message: err.message,
        });
        loaderHidden();
    })

    function findArrLenght(arr) {
        currentLenght = 0;
        for (let key in arr) {
            currentLenght += 1
        }
        return currentLenght
    }
};

loadMoreBtn.addEventListener("click", loadMorePictures);

function loadMorePictures() {
    loadMoreBtnHidden();
    loaderShow();
    currentPage += 1;
    if (currentPage * currentGalleryLength >= currentHits) {
        loadMoreBtnHidden();
        iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
        });
    }

    onSearch(currentQuery, currentPage).then(data => {
        galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup(data.hits));
        gallery.refresh();
        scrollGallery()
        loadMoreBtnShow();
    }
    ).catch(err => {
        console.dir(err)
        iziToast.error({
            title: err,
            position: "topRight",
            message: err.message,
        });
    })
        .finally(() => {
            loaderHidden();
            if (currentPage * currentLenght >= currentHits) {
                loadMoreBtnHidden();
            }
        });
}

function loaderShow() {
    loader.style.display = "block";
}
function loaderHidden() {
    loader.style.display = "none"
}


function loadMoreBtnShow() {
    loadMoreBtn.style.display = "block"
}
function loadMoreBtnHidden() {
    loadMoreBtn.style.display = "none"
}

function cleanInput() {
    return inputData.value = ""
}

function scrollGallery() {
    const galleryCard = document.querySelector('.galleryCard-wrapper');

    if (galleryCard) {
        const cardHeight = galleryCard.getBoundingClientRect().height;

        window.scrollBy({
            top: cardHeight * 2,
            left: 0,
            behavior: 'smooth'
        });
    }
}

goTopBtn.style.display = "none";
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        goTopBtn.style.display = 'block';
    } else {
        goTopBtn.style.display = 'none';
    }
});
goTopBtn.addEventListener("click", onTop);
function onTop() {
    if (window.scrollY > 0) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
}