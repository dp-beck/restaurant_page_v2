import food from './food.jpeg';

export default function loadHome() {
    const content = document.getElementById('content');
    
    const header = document.createElement('h1');
    const headerNode = document.createTextNode("Welcome to my Restaurant!");
    header.appendChild(headerNode);

    const image = document.createElement('img');
    image.setAttribute("src", food);

    const text = document.createElement('p');
    const copyNode = document.createTextNode('Lorem Ipsum. Sic Transit Gloria.');
    text.appendChild(copyNode);


    content.appendChild(header);
    content.appendChild(image);
    content.appendChild(text);
}
