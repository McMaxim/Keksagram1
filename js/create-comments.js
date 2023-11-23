import { getRandomPositiveInteger } from './random-number.js';

let lastId = 0;

function getId  (){
  lastId++;
  return lastId;
}

function getLikes () {
  return getRandomPositiveInteger(15,200);
}

function getIdComments (){
  return getRandomPositiveInteger(1,1000000);
}

function getAvatar (){
  return `img/avatar-${getRandomPositiveInteger(1,6)}.svg`;
}

const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const names = ['Александр','Сергей','Алексей','Дмитрий','Андрей','Елена','Ольга','Мария','Наталья','Екатерина'];

function getMessage (){ return messages[getRandomPositiveInteger(0,messages.length-1)];}


function getName  () {return names[getRandomPositiveInteger(0,names.length-1)];}

const createComment = () =>({
  id: getIdComments(),
  avatar: getAvatar(),
  message: getMessage(),
  name: getName(),
});

function createCommentsFromPost (){ return Array.from({length: 25}, createComment);}

const createPost = () =>{
  const i = getId();
  return{
    id: i,
    url: `photos/${i}.jpg`,
    description: 'Супер',
    likes: getLikes(),
    comments: createCommentsFromPost(),
  };
};

export function Posts (len){return Array.from({length: len}, createPost);}
