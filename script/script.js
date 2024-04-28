// document.addEventListener("DOMContentLoaded", () => {
//     let currentIndex = 0;
//     const carouselItems = document.querySelectorAll('.slide');

//     function goToSlide(index) {
//         if (index < 0) {
//             index = carouselItems.length - 1;
//         } else if (index >= carouselItems.length) {
//             index = 0;
//         }
//         currentIndex = index;
//         document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     function goToNextSlide() {
//         goToSlide(currentIndex + 1);
//     }

//     function goToPrevSlide() {
//         goToSlide(currentIndex - 1);
//     }

//     document.querySelector('.prev').addEventListener('click', goToPrevSlide);
//     document.querySelector('.next').addEventListener('click', goToNextSlide);
// });



// document.addEventListener("DOMContentLoaded", () => {
//     let currentIndex = 0;
//     let startX = 0;
//     let isDragging = false;
//     const carouselItems = document.querySelectorAll('.carousel');

//     function goToSlide(i) {
//         if (i < 0) {
//             i = carouselItems.length - 1;
//         } else if (i >= carouselItems.length) {
//             i = 0;
//         }
//         currentIndex = i;
//         document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     function handleTouchStart(event) {
//         isDragging = true;
//         startX = event.touches[0].clientX;
//     }

//     function handleTouchMove(event) {
//         if (!isDragging) return;
//         const xDiff = event.touches[0].clientX - startX;
//         if (xDiff > 0) {
//             goToSlide(currentIndex - 1);
//         } else {
//             goToSlide(currentIndex + 1);
//         }
//         isDragging = false;
//     }

//     function handleTouchEnd() {
//         isDragging = false;
//     }

//     document.querySelector('.prev').addEventListener('click', () => goToSlide(currentIndex - 1));
//     document.querySelector('.next').addEventListener('click', () => goToSlide(currentIndex + 1));
//     document.addEventListener('touchstart', handleTouchStart);
//     document.addEventListener('touchmove', handleTouchMove);
//     document.addEventListener('touchend', handleTouchEnd);
// });




document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.slide');
    const totalSlides = carouselItems.length;

    function goToSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function goToNextSlide() {
        goToSlide(currentIndex + 1);
    }

    function goToPrevSlide() {
        goToSlide(currentIndex - 1);
    }

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        const xDiff = event.touches[0].clientX - startX;
        if (Math.abs(xDiff) > 50) {
            if (xDiff > 0) {
                goToPrevSlide();
            } else {
                goToNextSlide();
            }
            startX = event.touches[0].clientX;
        }
    }

    function handlePrevClick() {
        goToPrevSlide();
    }

    function handleNextClick() {
        goToNextSlide();
    }

    carousel.addEventListener('touchstart', handleTouchStart);
    carousel.addEventListener('touchmove', handleTouchMove);
    document.querySelector('.prev').addEventListener('click', handlePrevClick);
    document.querySelector('.next').addEventListener('click', handleNextClick);
});


