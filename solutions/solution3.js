const flavorsObject = Object.assign({}, iceCreamFlavors);
for (let flavorNumber in flavorsObject) {
    $(".ice-cream-list").append(`<li class="ice-cream-flavor">${flavorsObject[flavorNumber]}</li>`);
}