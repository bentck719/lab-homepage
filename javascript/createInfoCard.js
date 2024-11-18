export function createInfoCard(title, content) {
	// 創建容器元素
	const infoCard = document.createElement("div");
	infoCard.classList.add("d-flex", "flex-column", "my-2");

	// 創建標題元素
	const sectionTitle = document.createElement("div");
	sectionTitle.classList.add(
		"fw-bold",
		"fs-3",
		"p-2",
		"px-4",
		"text-white",
		"research-topic-box"
	);
	sectionTitle.textContent = title;

	// 創建內容元素
	const sectionContent = document.createElement("div");
	sectionContent.classList.add("fs-5", "p-4", "bg-body-tertiary");
	sectionContent.innerHTML = content;

	// 將標題和內容加入容器
	infoCard.appendChild(sectionTitle);
	infoCard.appendChild(sectionContent);

	return infoCard;
}
