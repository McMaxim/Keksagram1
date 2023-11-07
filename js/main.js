/* eslint-disable no-unused-expressions */
// const { create } = require("browser-sync");

import { Posts } from './create-comments.js';

// console.log(Posts(25));
const html = document.documentElement;
for (let i = 0; i < html.children.length; i++) {
    const child = html.children[i];
    console.log(child.tagName.toLowerCase());
    for (let j = 0; j < child.children.length; j++) {
        const innerChild = child.children[j];
        console.log('|---' + innerChild.tagName.toLowerCase());
    }
}

