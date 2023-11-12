
// import { getRandomPositiveInteger } from './random-number.js';
const bigPhoto = document.querySelector('.big-picture');
const image = bigPhoto.querySelector('.big-picture__preview');
const imgPhoto = image.querySelector('.big-picture__img').querySelector('img');
const social = image.querySelector('.social').querySelector('.social__header');
const avatarsender = social.querySelector('.social__picture');
const totalComments = image.querySelector('.social').querySelector('.social__comment-count');
const load = image.querySelector('.social').querySelector('.social__comments-loader');
const button = image.querySelector('.big-picture__cancel');
const containerComments = image.querySelector('.social').querySelector('.social__comments');

button.addEventListener('click', (evt)=>{
  evt.preventDefault();
  bigPhoto.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});
const bigMessage = document.querySelector('#big-message').content.querySelector('.social__comment');

export function allfunctions(postS,arrayPhotos){
  const pictures = postS.querySelectorAll('.picture');
  document.addEventListener('keydown', (evt)=> {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      bigPhoto.classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
    }
  });

  for (let i = 0; i<pictures.length; i++){
    pictures[i].addEventListener('click',(evt)=> {
      evt.preventDefault();
      bigPhoto.classList.remove('hidden');
      document.querySelector('body').classList.add('modal-open');
      load.classList.add('hidden');
      imgPhoto.src = pictures[i].querySelector('.picture__img').src;
      imgPhoto.alt = pictures[i].querySelector('.picture__img').alt;
      social.querySelector('.social__caption').textContent = arrayPhotos[i].description;
      social.querySelector('.social__likes').querySelector('.likes-count').textContent = arrayPhotos[i].likes;
      totalComments.querySelector('.comments-count').textContent = arrayPhotos[i].comments.length;
      containerComments.innerHTML = '';
      for (const message of arrayPhotos[i].comments){
        const newBigMessage = bigMessage.cloneNode(true);
        newBigMessage.querySelector('img').src = message.avatar;
        newBigMessage.querySelector('img').alt = message.name;
        newBigMessage.querySelector('p').textContent = message.message;
        containerComments.appendChild(newBigMessage);
      }

    });
  }
}

