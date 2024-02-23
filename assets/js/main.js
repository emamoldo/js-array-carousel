// ``
const slides = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

const activeImage = 0;

const slidesElement = document.querySelector('.slides');

const topElement =document.querySelector('.top');

const bottomElement =document.querySelector('.bottom');

console.log(slides, slidesElement, activeImage);

// Cicle for 

for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    console.log(slide);

    const slideMarkup = `<img class="${ i === activeImage ? 'active' : '' }" src="./assets/img/${slide}" alt="">`;
    console.log(slideMarkup);

    slidesElement.insertAdjacentHTML('beforeend', slideMarkup)
}

console.log(topElement, bottomElement);

// Listener Event for the top click
topElement.addEventListener('click', function(){
    console.log("click for the previus image");
})

// Listener Event for the bottom click
bottomElement.addEventListener('click', function(){
    console.log("click for the next image");
})