export default function loadMenu() {
    const content = document.getElementById('content');
    const header = document.createElement('h1');
    const headerNode = document.createTextNode("Menu");
    header.appendChild(headerNode);

    const text = document.createElement('p');
    const copyNode = document.createTextNode('Lorem Ipsum. Sic Transit Gloria.');
    text.appendChild(copyNode);

    content.appendChild(header);
    content.appendChild(text);
}
