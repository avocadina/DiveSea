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

const weeklySlider = document.querySelector('.weekly__wrapper');
const weeklyList = document.querySelector('.weekly-slider__list');
const weeklyItem = document.querySelectorAll('.weekly-slider__item');

if (heroSlider) {   
    const weeklyPrev = document.querySelector('.weekly-prev');
    const weeklyNext = document.querySelector('.weekly-next');

    var windowWidth = 1440;
    const currentWidth = 2528; // Это ширина списка для слайдера, всегда одинакова

    weeklyNext.addEventListener('click', () => {
        var currentMargin = getComputedStyle(weeklyList).marginLeft; //Каждый раз узнаю какой отступ у элемента
        var gap = getComputedStyle(weeklyList).gap; // Это отступ между элементами списка
        var width = parseInt(getComputedStyle(weeklyItem[0]).width) + parseInt(gap); //Это то расстояние, на которое нужно сделать отступ по нажатию

        var minMargin = Math.floor(-(currentWidth - windowWidth)); // Узнаю минимальный отступ, чтобы не получилось, что список бесконечно перемещается

        weeklyList.style.marginLeft = parseInt(currentMargin) - width + 'px'; // Изменяю отступ по нажатию
        var marginNumber = parseInt(currentMargin); // Вспомогательный элемент для проверки выхода за пределы минимального отступа

        if (marginNumber < minMargin) {
            weeklyList.style.marginLeft = '0px'; // Проверка выхода за пределы минимального отступа
        }
    });
    weeklyPrev.addEventListener('click', () => {
        var currentMargin = parseInt(getComputedStyle(weeklyList).marginLeft); //Каждый раз узнаю какой отступ у элемента

        var gap = getComputedStyle(weeklyList).gap; // Это отступ между элементами списка
        var width = parseInt(getComputedStyle(weeklyItem[0]).width) + parseInt(gap); //Это то расстояние, на которое нужно сделать отступ по нажатию

        var maxMargin = Math.floor(currentWidth - windowWidth); // Узнаю максимальный отступ, чтобы не получилось, что список бесконечно перемещается

        weeklyList.style.marginLeft = currentMargin + width + 'px'; // Изменяю отступ по нажатию

        if (currentMargin > maxMargin) {
            weeklyList.style.marginLeft = '0px'; // Проверка выхода за пределы максимального отступа
        }
    })
}

// счётчик для числа

let el = document.querySelectorAll('.span--statistics-title');

function draw(t){
  el.forEach(el => {
    let d = el.dataset
    el.textContent = Math.min(t/+d.delay, +d.value).toFixed(+d.precision)
  });
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

// анимации появления

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appearElement');
        };
    });
});

observer.observe(document.querySelector('.weekly-top'));

// burger

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    nav.classList.toggle('nav--active');
})

    //scroll

    let oldScrollTopPosition = document.documentElement.scrollTop;

    window.addEventListener('scroll', function() {
        let scrollTopPosition = document.documentElement.scrollTop;
    
        if (oldScrollTopPosition < scrollTopPosition) {
            this.document.querySelector('.header').classList.add('header--hidden');
            this.document.querySelector('.nav').classList.remove('nav--active');
            this.document.querySelector('.burger').classList.remove('burger--active');
            oldScrollTopPosition = scrollTopPosition;
        } else if (oldScrollTopPosition > scrollTopPosition) {
            this.document.querySelector('.header').classList.remove('header--hidden');
            oldScrollTopPosition = scrollTopPosition;
        }
    })