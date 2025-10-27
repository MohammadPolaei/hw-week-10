import data from "../itemAdder/foods.json";

window.addUp = (e) => {
	// add item count up
	e.parentElement.children[1].value++;
	// getting ID of item and assign the price
	let thisItemID = e.parentElement.parentElement.parentElement.parentElement.id;
	let { price } = data.products[thisItemID - 1];
	// adding new total price into price show section

	e.parentElement.parentElement.parentElement.parentElement.children[1].children[0].innerHTML =
		price * e.parentElement.children[1].value;
};
window.subDown = (e) => {
	// add item count down
	if (e.parentElement.children[1].value > 0) {
		e.parentElement.children[1].value--;
		// getting ID of item and assign the price
		let thisItemID =
			e.parentElement.parentElement.parentElement.parentElement.id;
		let { price } = data.products[thisItemID - 1];
		// adding new total price into price show section
		e.parentElement.parentElement.parentElement.parentElement.children[1].children[0].innerHTML =
			price * e.parentElement.children[1].value;
	} else return false;
};
