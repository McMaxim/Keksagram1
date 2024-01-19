import { sendData } from './api.js';
import { showAlert } from './util.js';
export const uploadPicture = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');
const hashtagField = document.querySelector('.text__hashtags');
const comtext = document.querySelector('.text__description');
const submitButton = document.querySelector('#upload-submit');
const effects = document.querySelectorAll('.effects__preview');
let truble = 1;
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const pristine = new Pristine(form,{
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error',
});


function validateNickname (value) {
  return value.length >= 0 && value.length <= 140;
}

pristine.addValidator(
  form.querySelector('.text__description'),
  validateNickname,
  'До 140 символов'
);

const validateTags = (value) => {
  const words = value.toLowerCase().split(' ');
  const re = /#(\d||\w)+/;
  let i = true;
  const array = [];
  if (words.length>5){
    i = false;
  }

  for (let j = 0; j<words.length;j++){
    if (re.test(words[j])){
      if (array.includes(words[j])){
        i  = false;}
      array.push(words[j]);}
    else{
      i = false;
    }
  }
  return i;

  // проверка значения поля на соответствие требований ТЗ
  // функция должна вернуть true либо false
};

pristine.addValidator(
  hashtagField,
  validateTags,
  'Неправильно заполнены хэштеги'
);
form.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  pristine.validate();
});

export const hideModal = () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  form.reset();
  // сбросим значение поля #upload-file, для этого, можно сбросить всю форму .img-upload__form с помощью метода .reset()
};


const showModal = () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
};


uploadPicture.addEventListener('change',(evt)=> {
  evt.preventDefault();
  const file = uploadPicture.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {

    imgPreview.src = URL.createObjectURL(file);
    for (let i of effects){
      i.style.backgroundImage =  `url(${URL.createObjectURL(file)})`;}
    showModal();
  }
});

cancelButton.addEventListener('click', () => {
  hideModal();
});


document.addEventListener('keydown',(evt)=> {
  if (truble === 1){
    if (evt.keyCode === 27){
      hideModal();
    }}
});


hashtagField.addEventListener('mouseover',()=>{
  truble = 0;
});

hashtagField.addEventListener('mouseout',()=>{
  truble=1;
});

comtext.addEventListener('mouseover',()=>{
  truble = 0;
});
hashtagField.addEventListener('mouseout',()=>{
  truble=1;
});
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
        },
        () => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          unblockSubmitButton();
          // поменять на ошибку
        },
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit};
