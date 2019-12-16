let listItems = "";

for (i = 0; i < iceCreamFlavors.length; i++) {
    let listItem = document.createElement("li");
    listItem.classList.add("ice-cream-flavor");
    let itemContent = document.createTextNode(iceCreamFlavors[i]);
    listItem.appendChild(itemContent);
    listItem = listItem.outerHTML;
    listItems += listItem;
}

document.querySelector(".ice-cream-list").innerHTML = listItems;