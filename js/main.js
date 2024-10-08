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

//weekly slider

const weeklySlider = document.querySelector('.weekly-slider__list');

if (heroSlider) {   
    const weeklyPrev = document.querySelector('.weekly-prev');
    const weeklyNext = document.querySelector('.weekly-next');

    weeklyNext.addEventListener('click', () => {
        var width = 300;
        var gap = 40;
        var current = getComputedStyle(weeklySlider).marginLeft;

        var minMargin = -(parseInt(width) + parseInt(gap))*2;

        weeklySlider.style.marginLeft = parseInt(current) - parseInt(gap) - parseInt(width) + 'px';
        var marginNumber = parseInt(current) - parseInt(gap) - parseInt(width);
        if (marginNumber < minMargin) {
            weeklySlider.style.marginLeft = '0px';
        }
    });

    weeklyPrev.addEventListener('click', () => {
        var width = 300;
        var gap = 40;
        var current = getComputedStyle(weeklySlider).marginLeft;

        var maxMargin = (parseInt(width) + parseInt(gap))*2;

        weeklySlider.style.marginLeft = parseInt(current) + parseInt(gap) + parseInt(width) + 'px';
        var marginNumber = parseInt(current) + parseInt(gap) + parseInt(width);
        if (marginNumber > maxMargin) {
            weeklySlider.style.marginLeft = '0px';
        }
    });
}