document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    let startX;
    let touchMoved = false;
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.slide');
    const totalSlides = carouselItems.length;

    function goToSlide(index) {
        currentIndex = index;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
        touchMoved = false;
    }

    function handleTouchMove(event) {
        if (!startX) return;
        const xDiff = startX - event.touches[0].clientX;
        if (Math.abs(xDiff) > 10) { // Check if touch moved significantly
            touchMoved = true;
        }
        event.preventDefault(); // Prevent scrolling while swiping
    }

    function handleTouchEnd(event) {
        if (!touchMoved) return;
        const xDiff = startX - event.changedTouches[0].clientX;
        if (Math.abs(xDiff) > 50) { // Check if swipe distance is significant
            if (xDiff > 0) {
                goToSlide(currentIndex + 1);
            } else {
                goToSlide(currentIndex - 1);
            }
        }
        startX = null;
    }

    function goToNextSlide() {
        goToSlide(currentIndex + 1);
    }

    function goToPrevSlide() {
        goToSlide(currentIndex - 1);
    }

    document.querySelector('.prev').addEventListener('click', goToPrevSlide);
    document.querySelector('.next').addEventListener('click', goToNextSlide);
    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchmove', handleTouchMove);
    carousel.addEventListener('touchend', handleTouchEnd);
});
