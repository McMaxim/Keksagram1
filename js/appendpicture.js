
const picture = document.querySelector('#picture').content.querySelector('.picture');
export const container = document.querySelector('.pictures');
const filters = document.querySelector(' .img-filters');


export function appendpicture(data){
  document.querySelectorAll('.picture').forEach((e) => e.remove());
  data.forEach(({url,likes,comments})=>{
    const newpicture = picture.cloneNode(true);
    newpicture.querySelector('.picture__img').src = url;
    newpicture.querySelector('.picture__info').querySelector('.picture__comments').textContent=comments.length;
    newpicture.querySelector('.picture__info').querySelector('.picture__likes').textContent=likes;
    container.appendChild(newpicture);
    filters.classList.remove('img-filters--inactive');
  });
}
