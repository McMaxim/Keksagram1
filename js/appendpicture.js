
const picture = document.querySelector('#picture').content.querySelector('.picture');
export const container = document.querySelector('.pictures');


export function appendpicture(data){
  data.forEach(({url,likes,comments})=>{
    const newpicture = picture.cloneNode(true);
    newpicture.querySelector('.picture__img').src = url;
    newpicture.querySelector('.picture__info').querySelector('.picture__comments').textContent=comments.length;
    newpicture.querySelector('.picture__info').querySelector('.picture__likes').textContent=likes;
    container.appendChild(newpicture);
  });
}
