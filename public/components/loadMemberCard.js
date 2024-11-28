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
			content: "黃丞漢<br />Graduated Student",
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

	members.map((member) => {
		const col = document.createElement("div");
		col.className = "col-12 col-md-6 col-xl-4 my-4";
		col.innerHTML = `
  <div class="card">
    <img src="${member.image}" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
      ${member.content}
      </p>
    </div>
  </div>`;
		memberContainer.appendChild(col);
	});
});
