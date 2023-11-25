export const uploadPicture = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const comtext = document.querySelector('.text__description');
let truble = 1;

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

const hideModal = () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  form.reset();
  // сбросим значение поля #upload-file, для этого, можно сбросить всю форму .img-upload__form с помощью метода .reset()
};


const showModal = () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  // document.addEventListener('keydown',(evt)=> {
  //   if (evt.keyCode === 27){
  //     hideModal();
  //   }
  // });
};


uploadPicture.addEventListener('change',(evt)=> {
  evt.preventDefault();
  showModal();
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
