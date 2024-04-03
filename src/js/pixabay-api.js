import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

import { createGalleryMarkup } from "./render-functions";
const galleryList = document.querySelector(".gallery-list");

export default function onSearch(searchQuery, currentPage) {
    const KEY_API = "42986246-3ae10d3224d15127557fd6ee9";
    const BASE_URL = "https://pixabay.com/api/";
    const searchParams = new URLSearchParams({
        key: KEY_API,
        q: searchQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: currentPage,
        per_page: 15
    });

    const fetchPictures = async () => {
        const response = await axios.get(`${BASE_URL}?${searchParams}`);
        return response.data;
    };

    fetchPictures()
        .then(data => {
            if (!data.total) {
                iziToast.error({
                    title: "Error",
                    position: "topRight",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
            };

            galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup(data.hits));
        })
        .catch(err => {
            iziToast.error({
                title: err,
                position: "topRight",
                message: "Oops! Something went wrong!",
            });
        })
        .finally(() => loader.hidden = true);
}