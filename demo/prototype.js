

console.log("JS Prototype file loaded");

//remove uneccesary width crap
function removeWidth(element) {
	element.style.removeProperty('width');
	console.log("removed width");
}

const issueDivs = [];
issueDivs = document.getElementsByClassName("Box_overflow-visible__1awWb");
console.log(issueDivs);
issueDivs.forEach(removeWidth);
