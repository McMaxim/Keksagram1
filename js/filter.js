import { getRandomPositiveInteger } from './random-number.js';
const random = document.querySelector('#filter-random');
const simple = document.querySelector('#filter-default');
const discass = document.querySelector('#filter-discussed');


const classicalFunction = (cb) => {
  simple.addEventListener('click', () => {
    simple.classList.add('img-filters__button--active');
    random.classList.remove('img-filters__button--active');
    discass.classList.remove('img-filters__button--active');
    cb();
  });
};
const randomFunction = (cb) => {
  random.addEventListener('click', () => {
    simple.classList.remove('img-filters__button--active');
    random.classList.add('img-filters__button--active');
    discass.classList.remove('img-filters__button--active');
    cb();
  });
};
const discassFunction = (cb) => {
  discass.addEventListener('click', () => {
    simple.classList.remove('img-filters__button--active');
    random.classList.remove('img-filters__button--active');
    discass.classList.add('img-filters__button--active');
    cb();
  });
};

const randomWizards = function(wizards){
  const data = [];
  const mySet = new Set();
  let i = 0;
  while (i<11){
    const z = getRandomPositiveInteger(0,wizards.length-1);
    if (!mySet.has(z)){
      mySet.add(z);
      i++;
    }
  }
  for (const n of mySet){
    data.push(wizards[n]);
  }
  return data;
};

const compareWizards = (wizardA, wizardB) => {
  const rankA = wizardA.comments.length;
  const rankB = wizardB.comments.length;

  return rankB - rankA;
};

const rateWizards = function(wizards){
  const data = wizards.slice().sort(compareWizards);
  return data;
};
export {classicalFunction, randomFunction,discassFunction,randomWizards,rateWizards};
