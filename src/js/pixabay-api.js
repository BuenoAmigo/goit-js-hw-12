import axios from "axios";

export default async function onSearch(searchQuery, currentPage) {
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

    const response = await axios.get(`${BASE_URL}?${searchParams}`);
    return response.data;
}
