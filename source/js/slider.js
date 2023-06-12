const slideBefore = document.querySelector('.slider__item--before');
const slideAfter = document.querySelector('.slider__item--after');
const btnSlideBefore = document.querySelector('.slider__button--before');
const btnSlideAfter = document.querySelector('.slider__button--after');

btnSlideBefore.addEventListener ('click', function (evt) {
  evt.preventDefault();
  slideBefore.classList.remove('visually-hidden');
  slideAfter.classList.add('visually-hidden');
})

btnSlideAfter.addEventListener ('click', function (evt) {
  evt.preventDefault();
  slideAfter.classList.remove('visually-hidden');
  slideBefore.classList.add('visually-hidden');
})

//Слайдер

/* global noUiSlider:readonly */
const sliderElement = document.querySelector('.slider__scale');

noUiSlider.create(sliderElement, {
    range: {
        min: 0,
        max: 100,
    },
    start: 50,
});
