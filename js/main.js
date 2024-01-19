/* eslint-disable no-unused-expressions */
// const { create } = require("browser-sync");

import { appendpicture, container } from './appendpicture.js';
import { allfunctions } from './head-photo.js';
import { getData } from './api.js';
import './workForm.js';
import './slider_rules.js';
import { showErr,debounce } from './util.js';
import { setUserFormSubmit,hideModal } from './workForm.js';
import { classicalFunction,discassFunction,randomFunction,randomWizards,rateWizards } from './filter.js';

const RERENDER_DELAY = 500;

getData((wizards) => {
  appendpicture(wizards);
  allfunctions(container,wizards);
  classicalFunction(debounce(()=> {
    appendpicture(wizards);
    allfunctions(container,wizards);
  },RERENDER_DELAY));
  randomFunction(debounce(()=> {
    const data = randomWizards(wizards);
    appendpicture(data);
    allfunctions(container,data);
  },RERENDER_DELAY,));

  discassFunction(debounce(()=> {
    const data = rateWizards(wizards);
    appendpicture(data);
    allfunctions(container,data);
  },RERENDER_DELAY,));

},(err) => showErr(err)
);

setUserFormSubmit(hideModal);
