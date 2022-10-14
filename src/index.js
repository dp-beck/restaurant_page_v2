import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const createNav = (() => {
    const nav = document.createElement('div');
    nav.setAttribute('id', 'nav');
    document.body.appendChild(nav);

    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.classList.add("navButtons");
    menuBtn.classList.add("navButtons");
    contactBtn.classList.add("navButtons");

    homeBtn.innerText = "Home";
    menuBtn.innerText = "Menu";
    contactBtn.innerText = "Contact Us";

    homeBtn.addEventListener('click', clearContent);
    homeBtn.addEventListener('click', loadHome);

    menuBtn.addEventListener('click', clearContent);
    menuBtn.addEventListener('click', loadMenu);

    contactBtn.addEventListener('click', clearContent);
    contactBtn.addEventListener('click', loadContact);

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
})();

const createContent = (() => {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.appendChild(content);
    return content;
})();

function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

loadHome();