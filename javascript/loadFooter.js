async function loadFooter() {
	const footer = await fetch("/public/footer.html");
	const content = await footer.text();
	document.getElementById("footer-container").innerHTML = content;
}
window.onload = loadFooter;
