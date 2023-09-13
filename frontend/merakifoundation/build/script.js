const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselContent = document.querySelector(".carousel-content");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % 3;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + 3) % 3;
    updateCarousel();
});

function updateCarousel() {
    const translateX = -currentIndex * 100;
    carouselContent.style.transform = `translateX(${translateX}%)`;
}

updateCarousel();
