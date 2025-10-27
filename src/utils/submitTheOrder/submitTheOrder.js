import {
	discountAmount,
	discountCode,
	priceToPay,
	serviceCost,
	submitPayment,
	wholeCartPrice,
} from "./itemsInDOMForCalculation/itemsInDOMForCalculation";

const menuSection = document.getElementById("menuSection__foodList");

menuSection.addEventListener("click", (e) => {
	if (e.target.parentElement.children[1].value != undefined) {
		// getting whole items price at once
		let wholePriceList = menuSection.querySelectorAll("#itemPrice");
		const wholePriceListData = Array.from(wholePriceList).map(
			(item) => +item.innerHTML
		);
		let theTotalPriceToPrint = wholePriceListData.reduce((a, b) => a + b, 0);

		// Updating PriceShow section on left side

		wholeCartPrice.innerHTML = `${theTotalPriceToPrint} تومان`;

		// Updating service Cost section on left side
		serviceCost.innerHTML = `${theTotalPriceToPrint * 0.09} تومان`;
		priceToPay.innerHTML = `${theTotalPriceToPrint * 0.91} تومان`;
		//
		//
		//
		// disount calculation
		//
		//
		//

		discountCode.addEventListener("input", () => {
			discountCode.value = discountCode.value.trim();
			switch (discountCode.value) {
				case "gold":
					discountAmount.innerHTML = "میزان تخفیف : 20%";
					priceToPay.innerHTML = `${theTotalPriceToPrint * 0.91 * 0.8} تومان`;
					break;
				case "silver":
					discountAmount.innerHTML = "میزان تخفیف : 15%";
					priceToPay.innerHTML = `${theTotalPriceToPrint * 0.91 * 0.85} تومان`;
					break;
				case "bronze":
					discountAmount.innerHTML = "میزان تخفیف : 10%";
					priceToPay.innerHTML = `${theTotalPriceToPrint * 0.91 * 0.9} تومان`;
					break;

				default:
					discountAmount.innerHTML = "0";
					priceToPay.innerHTML = `${theTotalPriceToPrint * 0.91} تومان`;
					break;
			}
		});
		return;
	} else return;
});
//
//
//
// submit button code
//
//
//
//
submitPayment.addEventListener("click", () => {
	// alert the result and submiting the order
	if (priceToPay.innerHTML != 0) {
		alert(`سفارش شما ثبت شد .\nمبلغ نهایی : ${priceToPay.innerHTML}`);
	} else alert("هیچ سفارشی ندارید !");

	// reset all inputs !!!

	Array.from(menuSection.children).forEach((item) => {
		// total price show of each item
		item.querySelectorAll("#itemPrice")[0].innerHTML = "0";
		// counter input of each item
		item.getElementsByTagName("input")[0].value = "0";
	});

	// the result section

	//total price
	wholeCartPrice.innerHTML = "0";
	//service pay
	serviceCost.innerHTML = "0";
	// discount part
	discountAmount.innerHTML = "0";
	discountCode.value = "";
	// total calculated price to pay
	priceToPay.innerHTML = "";
});
