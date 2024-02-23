// ``
// Variables Part
const slides = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

let activeImage = 0;

const slidesElement = document.querySelector('.slides');

const topElement =document.querySelector('.top');

const bottomElement =document.querySelector('.bottom');

console.log(slides, slidesElement, activeImage);


// Cicle for Section
for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    console.log(slide);

    const slideMarkup = `<img class="${ i === activeImage ? 'active' : '' }" src="./assets/img/${slide}" alt="">`;
    console.log(slideMarkup);

    slidesElement.insertAdjacentHTML('beforeend', slideMarkup)
}


// Listener Section
console.log(topElement, bottomElement);

// Listener Event for the top click
topElement.addEventListener('click', function(){

    activeImage--
    const currentImage = document.querySelector('img.active')
    console.log(currentImage);
    currentImage.classList.remove('active')

    const allSlides = document.querySelectorAll('.slides img')
    console.log(allSlides[activeImage]);
    allSlides[activeImage].classList.add('active')
    
})

// Listener Event for the bottom click
bottomElement.addEventListener('click', function(){

    activeImage++
    const currentImage = document.querySelector('img.active')
    console.log(currentImage);
    currentImage.classList.remove('active')

    const allSlides = document.querySelectorAll('.slides img')
    console.log(allSlides[activeImage]);
    allSlides[activeImage].classList.add('active')
})