const slider = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const neitherEffects = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');
const picture = document.querySelector('.img-upload__preview img');
const buttonMin = document.querySelector('.scale__control--smaller');
const buttonMax1 = document.querySelector('.img-upload__scale .scale__control--bigger');
const sizeListener = document.querySelector('.scale__control--value');
let x = 100;

buttonMax1.addEventListener('click', ()=>{
  if (x<100){
    x += 25;
    sizeListener.value= `${x}%`;
    picture.style.cssText += ` transform: scale(${sizeListener.value});`;
  }
});
buttonMin.addEventListener('click', ()=>{
  if (x>0){
    x -= 25;
    sizeListener.value= `${x}%`;
    picture.style.cssText += ` transform: scale(${sizeListener.value});`;
  }
});
noUiSlider.create(slider,{
  range:{
    min:0,
    max:100,
  },
  start:100,
  step: 1,
  connect: 'lower',
});
slider.noUiSlider.on('update',()=>{
  valueElement.value= slider.noUiSlider.get();
});
slider.setAttribute('disabled', true);
neitherEffects.addEventListener('change', ()=> {
  slider.noUiSlider.updateOptions({
    range: {
      min:0,
      max:100,
    },
    start:100,
    step: 1,
    connect: 'lower',
  });
  slider.setAttribute('disabled', true);
  picture.style.cssText = `display: block;max-width: 600px;max-height: 600px;transform: scale(${sizeListener.value});`;
});

effectChrome.addEventListener('change',(evt)=> {
  if (evt.target.checked) {
    slider.removeAttribute('disabled');
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 0.5,
      step: 0.1
    });
    slider.noUiSlider.on('update', () => {
      picture.style.cssText = `display: block;max-width: 600px;max-height: 600px; filter: grayscale(${valueElement.value});-webkit-filter: grayscale(${valueElement.value}); transform: scale(${sizeListener.value});`;
    });
  }
});

effectSepia.addEventListener('change',(evt)=> {
  if (evt.target.checked) {
    slider.removeAttribute('disabled');
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 0.5,
      step: 0.1
    });
    slider.noUiSlider.on('update', () => {
      picture.style.cssText = `display: block;max-width: 600px;max-height: 600px; filter: sepia(${valueElement.value});-webkit-filter: sepia(${valueElement.value});transform: scale(${sizeListener.value}); `;
    });
  }
});

effectMarvin.addEventListener('change',(evt)=> {
  if (evt.target.checked) {
    slider.removeAttribute('disabled');
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100
      },
      start: 50,
      step: 1
    });
    slider.noUiSlider.on('update', () => {
      picture.style.cssText = `display: block;max-width: 600px;max-height: 600px; filter: invert(${valueElement.value}%);-webkit-filter: invert(${valueElement.value}%);transform: scale(${sizeListener.value}); `;
    });
  }
});

effectPhobos.addEventListener('change',(evt)=> {
  if (evt.target.checked) {
    slider.removeAttribute('disabled');
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3
      },
      start: 1.5,
      step: 0.1
    });
    slider.noUiSlider.on('update', () => {
      picture.style.cssText = `display: block;max-width: 600px;max-height: 600px; filter: blur(${valueElement.value}px);-webkit-filter: blur(${valueElement.value}px); transform: scale(${sizeListener.value});`;
    });
  }
});

effectHeat.addEventListener('change',(evt)=> {
  if (evt.target.checked) {
    slider.removeAttribute('disabled');
    slider.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3
      },
      start: 2,
      step: 0.1
    });
    slider.noUiSlider.on('update', () => {
      picture.style.cssText = `display: block;max-width: 600px;max-height: 600px; filter: brightness(${valueElement.value});-webkit-filter: brightness(${valueElement.value});transform: scale(${sizeListener.value}); `;
    });
  }
});


