let addButtonEl = document.querySelector("button[name='add']");
let removeButtonEl = document.querySelector("button[name='remove']");

addButtonEl.addEventListener("click", function() {
	console.log("add");
	
	// create new element
	var newItem = document.createElement("li");
	newItem.innerHTML = "<a href='#'>Just another item</a>";
	newItem.setAttribute("class", "teste");
	
	//Get element to add new item to	
	document.querySelector("ul").appendChild(newItem);
  
});


removeButtonEl.addEventListener("click", handleRemoveButtonClick);

function handleRemoveButtonClick() {
	console.log("remove");
	
	// get element to remove
	var itemToRemove = document.querySelector("li:last-child");
	
	document.querySelector("ul").removeChild(itemToRemove);
}