

console.log("JS Prototype file loaded");

//remove uneccesary width crap
function removeWidth(element) {
	element.style.removeProperty('width');
	console.log("removed width");
}

document.getElementByClassName("Box_overflow-visible__1awWb").forEach(removeWidth);
