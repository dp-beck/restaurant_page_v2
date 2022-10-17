import restaurant from "./restaurant.jpg";

export default function loadContact() {
    const content = document.getElementById('content');
    const header = document.createElement('h1');
    const headerNode = document.createTextNode("Contact Us");
    header.appendChild(headerNode);

    const text = document.createElement('p');
    const copyNode = document.createTextNode('123 Main Street \
                                            Anytown, KY 25846 \
                                            258-658-7875');
    text.appendChild(copyNode);
    text.setAttribute("id", "address");

    const image = document.createElement('img');
    image.setAttribute("src", restaurant);

    content.appendChild(header);
    content.appendChild(text);
    content.appendChild(image);
}
