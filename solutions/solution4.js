let listItems = "";

iceCreamFlavors.forEach(flavor =>
    listItems += `<li class="ice-cream-flavor">${flavor}</li>`
);

$(".ice-cream-list").html(listItems);