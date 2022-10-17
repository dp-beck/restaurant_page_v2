import burrito from './burrito.jpeg';
import coffee from './coffee.jpg';
import burger from './burger.jpg';

const menuItems = [
    {
        name: "Kantian Burrito",
        description: "I can categorically state that this burrito is a necessary condition for the possibility of having a delicious eating experience.",
        photo: burrito
    },

    {
        name: "Aristotelian Java",
        description: "Ponder the nature of virtue with this dark roast.",
        photo: coffee,
    },

    {
        name: "Hegelian Cheeseburger",
        description: "If this deliciuos cheeseburge doesn't embody Absolute Spirit, I don't know what does!.",
        photo: burger,
    },
];

export default function loadMenu() {
    const content = document.getElementById('content');
    const header = document.createElement('h1');
    const headerNode = document.createTextNode("Food for Thought");
    header.appendChild(headerNode);
    content.appendChild(header);

    menuItems.forEach(element => {
        addItem(element.name, element.description, element.photo);
    });

}

function addItem(name, description, photo) {
    const title = document.createElement('h2');
    const titleNode = document.createTextNode(name);
    title.appendChild(titleNode);

    const text = document.createElement('p');
    const textNode = document.createTextNode(description);
    text.appendChild(textNode);

    const image = document.createElement('img');
    image.setAttribute('src', photo);

    content.appendChild(title);
    content.appendChild(text);
    content.appendChild(image);
}