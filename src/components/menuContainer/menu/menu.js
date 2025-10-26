import { ItemAdder } from "../../../utils/itemAdder/itemAdder";

export const menu = document.createElement("div");
export function Menu() {
	menu.setAttribute("id", "menuSection__foodList");
	menu.classList.add("grid");
	menu.classList.add("grid-cols-1");
	menu.classList.add("lg:grid-cols-2");
	menu.classList.add("gap-[20px]");
	menu.classList.add("overflow-y-scroll");
	menu.classList.add("[&::-webkit-scrollbar]:w-2");
	menu.classList.add("[&::-webkit-scrollbar-track]:bg-gray-100");
	menu.classList.add("[&::-webkit-scrollbar-thumb]:bg-gray-300");
	menu.classList.add("w-full");
	menu.classList.add("h-full");
	menu.classList.add("px-5");
	// itemAdder here
	ItemAdder();
	return menu;
}
