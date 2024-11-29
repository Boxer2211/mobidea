document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const searchToggle = document.querySelector(".search-toggle");
    const searchInput = document.querySelector(".search-input");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("open");
    });

    searchToggle.addEventListener("click", () => {
        searchInput.classList.toggle("show");
    });
});
