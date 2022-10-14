// 1. Create a contact and menu page as separate modules.
//  a. Separate js files
//  b. export function

// 2. Create the tabs in the index.js file for switching between pages.
//  a. import modules
//  b. three buttons on the header
//  b. click button wipes out current content
//  c. then loads new content by calling imported module function

import './style.css';
import loadHome from './home.js';

const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);

loadHome();