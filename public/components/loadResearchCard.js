document.addEventListener("DOMContentLoaded", function () {
	const researchContainer = document.getElementById("research-container");
	const researches = [
		// Add your research objects here
		{
			image: "./public/image/CXL-logo.jpg",
			title: "Compute Express Link, CXL",
			content:
				"CXL, a byte-addressable protocol based upon PCIe, is being leveraged to enhance current memory tiering systems. Recently, our focusing is on implementing CXL.mem to efficiently manage page caches, optimizing memory usage and performance.",
		},
		{
			image: "./public/image/dummy.jpg",
			title: "Quantum",
			content: "Tzu-Ching Kuo<br />Graduated Student",
		},
	];

	researches.forEach((research) => {
		const col = document.createElement("div");
		col.className = "card mb-3";
		col.innerHTML = `
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${research.image}" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${research.title}</h5>
          <p class="card-text">${research.content}</p>
        </div>
      </div>
    </div>`;
		researchContainer.appendChild(col);
	});
});
