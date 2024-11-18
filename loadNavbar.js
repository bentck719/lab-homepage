async function loadNavbar() {
	const footer = await fetch("/navbar.html");
	const content = await footer.text();
	document.getElementById("navbar-container").innerHTML = content;
}
window.addEventListener("DOMContentLoaded", loadNavbar);
