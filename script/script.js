document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const carouselItems = document.querySelectorAll('.slide');

    function goToSlide(index) {
        if (index < 0) {
            index = carouselItems.length - 1;
        } else if (index >= carouselItems.length) {
            index = 0;
        }
        currentIndex = index;
        document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function goToNextSlide() {
        goToSlide(currentIndex + 1);
    }

    function goToPrevSlide() {
        goToSlide(currentIndex - 1);
    }

    document.querySelector('.prev').addEventListener('click', goToPrevSlide);
    document.querySelector('.next').addEventListener('click', goToNextSlide);
});