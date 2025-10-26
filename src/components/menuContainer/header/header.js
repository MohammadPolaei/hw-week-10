export function Header() {
	const header = document.createElement("div");
	header.setAttribute("id", "menuSection__title");
	header.classList.add("text-white");
	header.classList.add("text-2xl");
	header.classList.add("font-bold");
	header.innerHTML = `رستوران مک دونالد شعبه تهران`;
	return header;
}
