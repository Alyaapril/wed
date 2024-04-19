document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    let startX;
    let touchMoved = false;

    function goToSlide(index) {
        const carouselItems = document.querySelectorAll('.slide');
        if (index < 0) {
            index = carouselItems.length - 1;
        } else if (index >= carouselItems.length) {
            index = 0;
        }
        currentIndex = index;
        document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
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
                goToNextSlide();
            } else {
                goToPrevSlide();
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
    document.querySelector('.carousel').addEventListener('touchstart', handleTouchStart);
    document.querySelector('.carousel').addEventListener('touchmove', handleTouchMove);
    document.querySelector('.carousel').addEventListener('touchend', handleTouchEnd);
});
