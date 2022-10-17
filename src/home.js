import thinker from './thinker.jpg';

export default function loadHome() {
    const content = document.getElementById('content');
    
    const header = document.createElement('h1');
    const headerNode = document.createTextNode("Welcome to my Restaurant!");
    header.appendChild(headerNode);

    const image = document.createElement('img');
    image.setAttribute("src", thinker);

    const text = document.createElement('p');
    const copyNode = document.createTextNode('Come for the coffee. \
    Stay for the deep thoughts! We have all kinds of delicious grub \
    to stimulate your mind and whet your appetite!');
    text.appendChild(copyNode);


    content.appendChild(header);
    content.appendChild(image);
    content.appendChild(text);
}
