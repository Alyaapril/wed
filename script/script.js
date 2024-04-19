document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const carouselItems = document.querySelectorAll('.slide');
    let startX;

    function goToSlide(index) {
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
    }

    function handleTouchMove(event) {
        if (!startX) return;
        const xDiff = startX - event.touches[0].clientX;
        if (xDiff > 0) {
            goToNextSlide();
        } else {
            goToPrevSlide();
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
});
