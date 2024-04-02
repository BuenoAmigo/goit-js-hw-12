import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createGalleryMarkup } from "./render-functions";

export default function onSearch(searchQuery) {
    const KEY_API = "42986246-3ae10d3224d15127557fd6ee9";
    const BASE_URL = "https://pixabay.com/api/";
    const searchParams = new URLSearchParams({
        key: KEY_API,
        q: searchQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    fetch(`${BASE_URL}?${searchParams}`).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()
    })
        .then(data => {
            if (!data.total) {
                iziToast.error({
                    title: "Error",
                    position: "topRight",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
            };
            createGalleryMarkup(data.hits)
        })
        .catch(err => {
            iziToast.error({
                title: "Error",
                position: "topRight",
                message: `Oops! Something went wrong!`,
            });
        })
        .finally(() => loader.hidden = true)
}