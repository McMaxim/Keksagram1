import { Posts } from './create-comments.js';

const picture = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');


export function appendpicture(num){
  const similarListFragment = document.createDocumentFragment();
  const arrayPost = Posts(num);
  arrayPost.forEach(({url,likes,comments})=>{
    const newpicture = picture.cloneNode(true);
    newpicture.querySelector('.picture__img').src = url;
    newpicture.querySelector('.picture__info').querySelector('.picture__comments').textContent=comments.length;
    newpicture.querySelector('.picture__info').querySelector('.picture__likes').textContent=likes;
    similarListFragment.appendChild(newpicture);
    container.appendChild(similarListFragment);
  });

}

