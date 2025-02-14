document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    let index = 0;
    
    function nextSlide() {
        index = (index + 1) % carousel.children.length;
        updateCarousel();
    }
    
    function updateCarousel() {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
    
    setInterval(nextSlide, 3000);
});
