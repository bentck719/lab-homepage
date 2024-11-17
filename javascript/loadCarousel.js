async function loadCarousel() {
	const carousel = await fetch("/public/components/carousel.html");
	const content = await carousel.text();
	document.getElementById("carousel-container").innerHTML = content;
}
window.onload = loadCarousel;
