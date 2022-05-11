

console.log("JS Prototype file loaded");

//remove uneccesary width crap
function removeWidth(element) {
	element.style.removeProperty('width');
}

issueDivs = [];
issueDivs = document.getElementsByClassName("Box_overflow-visible__1awWb");
console.log(issueDivs);
for (let index = 0; index < issueDivs.length; ++index) {
    const element = issueDivs[index];
       removeWidth(element);
  	console.log("removed width");
}