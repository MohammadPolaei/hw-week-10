export function MenuContainer() {
	const menuContainer = document.createElement("div");
	menuContainer.setAttribute("id", "container");
	menuContainer.classList.add(
		"flex,flex-col,justify-items-start,gap-[50px],p-[20px],box-border,max-h-screen,sm:flex-row"
	);
	menuContainer.innerHTML = ``;
	return menuContainer;
}
