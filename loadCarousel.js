async function loadCarousel() {
	const carousel = await fetch("/carousel.html");
	const content = await carousel.text();
	document.getElementById("carousel-container").innerHTML = content;
}
window.onload = loadCarousel;
