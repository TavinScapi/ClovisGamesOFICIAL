const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.right');
const prevButton = document.querySelector('.carousel-button.left');
const slideWidth = slides[0].getBoundingClientRect().width;

let currentSlide = 0;
let autoScrollInterval;

function moveToSlide(track, currentSlide, targetSlide) {
    track.style.transform = `translateX(-${targetSlide * slideWidth}px)`;
}

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        moveToSlide(track, currentSlide === 0 ? slides.length - 1 : currentSlide - 1, currentSlide);
    }, 3000); // Define o intervalo de tempo (3 segundos neste caso)
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    moveToSlide(track, currentSlide === 0 ? slides.length - 1 : currentSlide - 1, currentSlide);
    stopAutoScroll();
    startAutoScroll();
});

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1;
    }
    moveToSlide(track, currentSlide === slides.length - 1 ? 0 : currentSlide + 1, currentSlide);
    stopAutoScroll();
    startAutoScroll();
});

startAutoScroll();

track.addEventListener('mouseover', stopAutoScroll);
track.addEventListener('mouseout', startAutoScroll);
