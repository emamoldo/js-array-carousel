// ``
console.log("its working");

const slides = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

const activeImage = 0;

const slidesElement = document.querySelector('.slides');

console.log(slides, slidesElement, activeImage);

for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    console.log(slide);

    const slideMarkup = `<img class="${ i === activeImage ? 'active' : '' }" src="./assets/img/${slide}" alt="">`;
    console.log(slideMarkup);
}