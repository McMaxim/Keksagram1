
// import { getRandomPositiveInteger } from './random-number.js';
const bigPhoto = document.querySelector('.big-picture');
const image = bigPhoto.querySelector('.big-picture__preview');
const imgPhoto = image.querySelector('.big-picture__img').querySelector('img');
const social = image.querySelector('.social').querySelector('.social__header');
const totalComments = image.querySelector('.social').querySelector('.social__comment-count');
const load = image.querySelector('.social').querySelector('.social__comments-loader');
const button = image.querySelector('.big-picture__cancel');
const containerComments = image.querySelector('.social').querySelector('.social__comments');
const bigMessage = document.querySelector('#big-message').content.querySelector('.social__comment');
let dataBigPhoto = 10000000000000;
let eschelp = 0;


export function allfunctions(postS,arrayPhotos){
  const pictures = postS.querySelectorAll('.picture');
  function support (i){
    let child = containerComments.lastElementChild;
    while (child) {
      containerComments.removeChild(child);
      child = containerComments.lastElementChild;
    }
    for (let j=0; j<+totalComments.querySelector('.comments-last').textContent; j++){
      const newBigMessage = bigMessage.cloneNode(true);
      newBigMessage.querySelector('img').src = arrayPhotos[i].comments[j].avatar;
      newBigMessage.querySelector('img').alt = arrayPhotos[i].comments[j].name;
      newBigMessage.querySelector('p').textContent = arrayPhotos[i].comments[j].message;
      containerComments.appendChild(newBigMessage);
    }
  }
  load.addEventListener('click',(evt)=> {
    evt.preventDefault();
    if (+totalComments.querySelector('.comments-last').textContent<arrayPhotos[dataBigPhoto].comments.length){
      totalComments.querySelector('.comments-last').textContent =  +totalComments.querySelector('.comments-last').textContent+5;
      support(dataBigPhoto);
      if (+totalComments.querySelector('.comments-last').textContent>= totalComments.querySelector('.comments-count').textContent){
        load.classList.add('hidden');
      }
    }
  });

  for (let i = 0; i<pictures.length; i++){
    pictures[i].addEventListener('click',(evt)=> {
      eschelp=1;
      evt.preventDefault();
      bigPhoto.classList.remove('hidden');
      document.querySelector('body').classList.add('modal-open');
      imgPhoto.src = pictures[i].querySelector('.picture__img').src;
      imgPhoto.alt = pictures[i].querySelector('.picture__img').alt;
      social.querySelector('.social__caption').textContent = arrayPhotos[i].description;
      social.querySelector('.social__likes').querySelector('.likes-count').textContent = arrayPhotos[i].likes;
      totalComments.querySelector('.comments-count').textContent = arrayPhotos[i].comments.length;
      support(i);
      dataBigPhoto=i;
    });
  }
  document.addEventListener('keydown', (evt)=> {
    if (evt.keyCode === 27 && eschelp===1) {
      bigPhoto.classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
      totalComments.querySelector('.comments-last').textContent = '5';
      support(dataBigPhoto);
      load.classList.remove('hidden');
      eschelp=0;
    }
  });
  button.addEventListener('click', (evt)=>{
    evt.preventDefault();
    bigPhoto.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    totalComments.querySelector('.comments-last').textContent = '5';
    support(dataBigPhoto);
    load.classList.remove('hidden');
  });
}

