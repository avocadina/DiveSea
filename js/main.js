//hero slider

const heroSlider = document.querySelector('.hero__slider');

if (heroSlider) {   
    const heroPrev = document.querySelector('.hero-prev');
    const heroNext = document.querySelector('.hero-next');
    const hero1 = document.getElementById('hero1');
    const hero2 = document.getElementById('hero2');

    heroPrev.addEventListener('click', () => {
        hero2.classList.toggle('hero-slider__item--disabled');
        hero1.classList.toggle('hero-slider__item--disabled');
    });
    heroNext.addEventListener('click', () => {
        hero1.classList.toggle('hero-slider__item--disabled');
        hero2.classList.toggle('hero-slider__item--disabled');
    });


}