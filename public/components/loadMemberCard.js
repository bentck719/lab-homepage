document.addEventListener("DOMContentLoaded", function () {
	const memberContainer = document.getElementById("member-container");
	const members = [
		// Add your member objects here
		{
			image: "./public/image/dummy.jpg",
			content: "Tzu-Ching Kuo<br />Master's degree",
		},
		{
			image: "./public/image/dummy.jpg",
			content: "Jing-Ting Lin<br />Master's degree",
		},
		{
			image: "./public/image/dummy.jpg",
			content: "Cheng-Han Huang<br />Master's degree",
		},
		{
			image: "./public/image/dummy.jpg",
			content: "Shao-Huan Yu<br />Master's degree",
		},
		{
			image: "./public/image/dummy.jpg",
			content: "Ruo-Ling Huang<br />Master's degree",
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
