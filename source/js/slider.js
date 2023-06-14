/* global noUiSlider:readonly */

const sliderElement = document.querySelector('.slider__scale');
const beforeItem = document.querySelector('.slider__item--before');
const afterItem = document.querySelector('.slider__item--after');
const btnSlideBefore = document.querySelector('.slider__button--before');
const btnSlideAfter = document.querySelector('.slider__button--after');

let startValue = 50;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: startValue,
});

function setSliderWidth() {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 768) {
    startValue = 0;
  } else {
    startValue = 50;
  }

  sliderElement.noUiSlider.set(startValue);
}

sliderElement.noUiSlider.on('update', function (values, handle) {
  const currentValue = parseFloat(values[handle]);
  const widthAfter = currentValue + '%';
  const widthBefore = 100 - currentValue + '%';

  afterItem.style.width = widthAfter;
  beforeItem.style.width = widthBefore;
});

btnSlideBefore.addEventListener('click', function (evt) {
  evt.preventDefault();
  beforeItem.style.width = '100%';
  afterItem.style.width = '0%';
  sliderElement.noUiSlider.set(0);
});

btnSlideAfter.addEventListener('click', function (evt) {
  evt.preventDefault();
  beforeItem.style.width = '0%';
  afterItem.style.width = '100%';
  sliderElement.noUiSlider.set(100);
});

setSliderWidth();


window.addEventListener('resize', setSliderWidth);


/*
const sliderElement = document.querySelector('.slider__scale');

const beforeItem = document.querySelector('.slider__item--before');
const afterItem = document.querySelector('.slider__item--after');

const btnSlideBefore = document.querySelector('.slider__button--before');
const btnSlideAfter = document.querySelector('.slider__button--after');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 50,
});

sliderElement.noUiSlider.on('update', function (values, handle) {
  const currentValue = parseFloat(values[handle]);
  const widthAfter = currentValue + '%';
  const widthBefore = 100 - currentValue + '%';

  afterItem.style.width = widthAfter;
  beforeItem.style.width = widthBefore;
});

btnSlideBefore.addEventListener('click', function (evt) {
  evt.preventDefault();
  beforeItem.style.width = '100%';
  afterItem.style.width = '0%';
  sliderElement.noUiSlider.set(0);
});

btnSlideAfter.addEventListener('click', function (evt) {
  evt.preventDefault();
  beforeItem.style.width = '0%';
  afterItem.style.width = '100%';
  sliderElement.noUiSlider.set(100);
});
*/
