//state object
const appState = {
	items: []
};

const testState = {
	items: [
		{ title: 'apples', checked: true },
		{ title: 'oranges', checked: true },
		{ title: 'milk', checked: false },
		{ title: 'bread', checked: true }
	]
};


//state modification functions
//function to add item
function addItem(appState, item) {
	appState.items.push(`{title:${item}, checked: false}`);
};

//function to check item, no jq - toggle boolean in appState
// instead .shopping-item__checked 

// function checkItem(appState, item) {

// 	if(appState) {
// 		return;
// };
// }//function to remove item

// function removeItem(appState, itemIndex) {
// 	appState.items.splice(itemIndex, 1);
// };




//render functions
function renderList(appState, item, element) {
	//console.log(item, 'test');
	$('.shopping-list').html("");
	let itemsHTML = appState.items.map(function(item) {
		return `<li>
        			<span class="shopping-item">${item}</span>
        			<div class="shopping-item-controls">
          				<button class="shopping-item-toggle">
            				<span class="button-label">check</span>
          				</button>
          				<button class="shopping-item-delete">
            				<span class="button-label">delete</span>
          				</button>
        			</div>
      			</li>`;
	});
	element.append(itemsHTML);
};


//event listeners
$(document).ready(function (addEventListeners) {
	
	$('.shopping-list-add').on("click", function(event) {
		event.preventDefault();
    	let item = addItem(appState, $('.shopping-list-add-input').val());
    	renderList(appState, item, $('.shopping-list'));
	});



	// $('.shopping-item-toggle').on("click", function(event) {
	// 	event.preventDefault();
	// 	let item = checkItem(appState, $('.shopping-list-toggle-input').val());


	// 	$('button').closest('shopping-item').addClass('shopping-item__checked');
 //    	renderList(appState, item, $('.shopping-list'));
	// });

	// $('.shopping-item-delete').on("click", function(event) {
	// 	//event.preventDefault();
	// 	//$(itemToRemove).html("");
 //    	let itemToRemove = removeItem(appState, $('.shopping-list-remove-input').val());
 //    	renderList(appState, $('.shopping-list'));
	// });
	


//delete.  on click 

//check

});

console.log(appState);







