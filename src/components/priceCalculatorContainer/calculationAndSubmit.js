const calculationAndSubmit = document.createElement("div");
const calculationAndSubmit__information = document.createElement("div");
const calculationAndSubmit__payment = document.createElement("div");

export function CalculationAndSubmit() {
	calculationAndSubmit.setAttribute("id", "calculationAndSubmit");
	calculationAndSubmit.classList.add("bg-[#00c8c4]");
	calculationAndSubmit.classList.add("p-[25px]");
	calculationAndSubmit.classList.add("rounded-2xl");
	calculationAndSubmit.classList.add("shadow-xl");
	calculationAndSubmit.classList.add("h-[380px]");
	calculationAndSubmit.classList.add("w-[100%]");
	calculationAndSubmit.classList.add("sm:w-[30%]");
	calculationAndSubmit.classList.add("flex");
	calculationAndSubmit.classList.add("flex-col");
	calculationAndSubmit.classList.add("gap-5");
	calculationAndSubmit.classList.add("justify-between");

	// div children
	// div calculationAndSubmit__information

	calculationAndSubmit__information.setAttribute(
		"id",
		"calculationAndSubmit__information"
	);
	calculationAndSubmit__information.classList.add("flex");
	calculationAndSubmit__information.classList.add("flex-col");
	calculationAndSubmit__information.classList.add("gap-3");
	calculationAndSubmit__information.innerHTML = `<div class="flex justify-between">
						<p>جمع کل سفارشات:</p>
						<p id="wholeCartPrice">0</p>
					</div>
					<div class="flex justify-between">
						<p>حق سرویس و کارمزد:</p>
						<p id="serviceCost">0</p>
					</div>
					<div class="flex justify-between">
						<p>تخفیف:</p>
						<p id="discountAmount">0</p>
					</div>
					<div class="flex justify-between relative">
						<input
							id="discountCode"
							type="text"
							placeholder="کد تخفیف"
							class="w-full bg-white py-2 pr-2 rounded-[5px] placeholder:px-1 focus:outline-0"
						/>
						<div
							class="bg-[#008292] absolute left-0 w-10 rounded-l-[5px] py-2 text-center text-white"
						>
							✔
						</div>
					</div>`;

	// div calculationAndSubmit__payment
	calculationAndSubmit__payment.setAttribute(
		"id",
		"calculationAndSubmit__payment"
	);
	calculationAndSubmit__payment.classList.add("flex");
	calculationAndSubmit__payment.classList.add("flex-col");
	calculationAndSubmit__payment.classList.add("gap-3");
	calculationAndSubmit__payment.innerHTML = `<div
						class="flex justify-between bg-[#ffdb02] rounded-[5px] px-3 py-2"
					>
						<p>مبلغ قابل پرداخت:</p>
						<p id="priceToPay">0</p>
					</div>
					<button
						id="submitPayment"
						class="w-full py-2 bg-[#008292] rounded-[5px] shadow-xl text-white"
					>
						ثبت سفارش
					</button>`;

	//
	calculationAndSubmit.append(
		calculationAndSubmit__information,
		calculationAndSubmit__payment
	);
	return calculationAndSubmit;
}
