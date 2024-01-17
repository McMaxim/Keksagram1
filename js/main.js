/* eslint-disable no-unused-expressions */
// const { create } = require("browser-sync");

import { appendpicture, container } from './appendpicture.js';
import { allfunctions } from './head-photo.js';
import { getData } from './api.js';
import './workForm.js';
import './slider_rules.js';
const ERR = document.querySelector('.error-container');
const ERRtext =  document.querySelector('.error-text');
ERR.classList.add('hidden');
function showErr (err) {
  ERRtext.textContent = err;
  ERR.classList.remove('hidden');
}

getData((wizards) => {
  appendpicture(wizards);
},(err) => showErr(err)
);

getData((wizards) => {
  allfunctions(container,wizards);
});


