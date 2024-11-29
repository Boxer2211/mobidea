document.addEventListener("DOMContentLoaded", () => {
    const bigImage = document.querySelector(".big-image img");
    const thumbnails = document.querySelectorAll(".thumbnails .thumb");
    let currentIndex = 0;

    function updateSlider(index) {
        thumbnails[currentIndex].classList.remove("active");
        bigImage.src = thumbnails[index].src;
        bigImage.classList.add("active");
        thumbnails[index].classList.add("active");
        currentIndex = index;
    }

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", () => updateSlider(index));
    });
});
