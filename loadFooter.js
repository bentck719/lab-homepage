async function loadFooter() {
	const footer = await fetch("/footer.html");
	const content = await footer.text();
	document.getElementById("footer-container").innerHTML = content;
}
window.addEventListener("DOMContentLoaded", loadFooter);
