document.addEventListener("DOMContentLoaded", function () {
	const memberContainer = document.getElementById("member-container");
	const members = [
		// Add your member objects here
		{
			image: "./public/image/dummy.jpg",
			content: "Tzu-Ching Kuo<br />Graduated Student",
		},
		{
			image: "./public/image/dummy.jpg",
			content: "Tzu-Ching Kuo<br />Graduated Student",
		},
		{
			image: "./public/image/dummy.jpg",
			content: "Tzu-Ching Kuo<br />Graduated Student",
		},
		{
			image: "./public/image/dummy.jpg",
			content: "Tzu-Ching Kuo<br />Graduated Student",
		},
		{
			image: "./public/image/dummy.jpg",
			content: "Tzu-Ching Kuo<br />Graduated Student",
		},
		{
			image: "./public/image/dummy.jpg",
			content: "Tzu-Ching Kuo<br />Graduated Student",
		},
	];

	let row;
	members.forEach((member, index) => {
		if (index % 2 === 0) {
			row = document.createElement("div");
			row.className = "row mb-3";
			memberContainer.appendChild(row);
		}
		const col = document.createElement("div");
		col.className = "col-6 col-md-6";
		col.innerHTML = `
  <div class="card">
    <img src="${member.image}" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
      ${member.content}
      </p>
    </div>
  </div>`;
		row.appendChild(col);
	});
});
