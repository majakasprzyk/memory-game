const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector("#prev-button");
const nextBtn = document.querySelector("#next-button");

// counter

let counter = 1;
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// button listeners

nextBtn.addEventListener('click', () =>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out"; // zamiast dodawania class w CSS
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () =>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out"; // zamiast dodawania class w CSS
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'last-clone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'first-clone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});