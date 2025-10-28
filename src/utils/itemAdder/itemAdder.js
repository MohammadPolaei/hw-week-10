import { menu } from "../../components/menuContainer/menu/menu";
import data from "./foods.json";

export function ItemAdder() {
	data.products.forEach((element) => {
		const newItem = document.createElement("div");
		let imageURL = "";
		switch (element.title) {
			case "همبرگر مخصوص":
			case "همبرگر معمولی":
			case " همبرگر مخصوص قارچ و پنیر":
			case "همبرگر معمولی با قارچ و پنیر":
				imageURL = "./Images/Berguer.jpg";
				break;

			case "سیب زمینی سرخ کرده":
			case "سیب زمینی سرخ کرده ویژه":
				imageURL = "./Images/french_fries.png";
				break;
			case "نوشابه":
			case "نوشابه رژیمی":
				imageURL = "./Images/soda.png";
				break;
			case "سالاد فصل":
			case "سالاد سزار":
				imageURL = "./Images/salad.png";
				break;

			default:
				break;
		}

		newItem.innerHTML = `<div
						class="box-border flex flex-row justify-between items-center bg-[#def3fd] rounded-[10px] w-full h-[120px] px-5 relative overflow-hidden"
						id="${element.id}"
					>
						<div class="flex flex-row items-center gap-4">
							<img
								src="${imageURL}"
								alt=""
								class="w-15 h-15 rounded-[5px]"
							/>
							<div class="flex flex-col gap-3">
								<h4 class="font-bold tex-[10px] sm:text-[15px]">${element.title}</h4>
								<p class="text-[15px]">${element.price} تومان</p>
								<div class="relative">
									<button id="addUp"
										class="absolute right-[-10px] rounded-r-[5px] text-white bg-[#008292] w-5"
										onclick="addUp(this)"
									>
										+
									</button>
									<input
										type="number"
										name=""
										id=""
										value="0"
										class="w-14 bg-white mr-1 rounded-[5px] shadow-2xl text-center focus:outline-0"
									/>
									<button id="subDown"
										class="absolute right-10.5 rounded-l-[5px] text-white bg-[#008292] w-5"
										onclick="subDown(this)"
									>
										-
									</button>
								</div>
							</div>
						</div>
						<div class="absolute bottom-3 left-3 text-[15px]"><span id="itemPrice">0</span> تومان</div>
					</div>`;

		menu.append(newItem);
	});
}
