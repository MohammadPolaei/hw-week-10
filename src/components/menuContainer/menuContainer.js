import { Header } from "./header/header";
import { Menu } from "./menu/menu";

export function MenuContainer() {
	const menuContainer = document.createElement("div");
	menuContainer.setAttribute("id", "menuSection");
	menuContainer.classList.add("bg-[#00c8c4]");
	menuContainer.classList.add("p-[25px]");
	menuContainer.classList.add("rounded-2xl");
	menuContainer.classList.add("shadow-xl");
	menuContainer.classList.add("w-full");
	menuContainer.classList.add("sm:w-[70%]");
	menuContainer.classList.add("max-h-[100%]");
	menuContainer.classList.add("flex");
	menuContainer.classList.add("flex-col");
	menuContainer.classList.add("justify-items-start");
	menuContainer.classList.add("items-center");
	menuContainer.classList.add("gap-[50px]");

	menuContainer.append(Header(), Menu());
	return menuContainer;
}
