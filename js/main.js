/* eslint-disable no-unused-expressions */
// const { create } = require("browser-sync");

import { appendpicture } from './appendpicture.js';
import { allfunctions } from './head-photo.js';
const getting = appendpicture(25);
export const arrayPhotos = getting[1];
// console.log(arrayPhotos);
export const posts = getting[0];
// console.log(posts);
// console.log(posts.children);
allfunctions(posts,arrayPhotos);

