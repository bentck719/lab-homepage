async function loadNavbar() {
	const footer = await fetch("../public/components/navbar.html");
	const content = await footer.text();
	document.getElementById("navbar-container").innerHTML = content;
}
window.addEventListener("DOMContentLoaded", loadNavbar);
