import { createListCard } from "./public/components/createListCard.js";

function loadListCard() {
	const container = document.getElementById("research-list");

	// 定義不同的 section
	const sections = [
		{
			content: `
             Memory/Storage Systems
          `,
		},
		{
			content: `
              Non-volatile Memory
          `,
		},
		{
			title: "高解析度物體辨識以及高速物體追蹤",
			content: `
              Computing-in-Memory Techniques
          `,
		},
	];

	// 動態插入 section
	sections.forEach(({ content }) => {
		const section = createListCard(content);
		container.appendChild(section);
	});
}

window.addEventListener("DOMContentLoaded", loadListCard);
