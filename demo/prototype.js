
//remove uneccesary width crap

function removeWidth(element) {
	element.style.removeProperty('width');
	console.log("removed width");
}

document.getElementByClass("Box_overflow-visible__1awWb").forEach(removeWidth);
