import { MenuContainer } from "./menuContainer/menuContainer";

export function WholeContainer() {
	const wholeContainer = document.createElement("div");
	wholeContainer.setAttribute("id", "container");
	wholeContainer.classList.add("flex");
	wholeContainer.classList.add("flex-col");
	wholeContainer.classList.add("justify-items-start");
	wholeContainer.classList.add("gap-[50px]");
	wholeContainer.classList.add("p-[20px]");
	wholeContainer.classList.add("box-border");
	wholeContainer.classList.add("max-h-screen");
	wholeContainer.classList.add("sm:flex-row");
	wholeContainer.append(MenuContainer());
	return wholeContainer;
}
