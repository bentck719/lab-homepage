{
	/* <div class="d-flex flex-row fs-3">
	<div class="bg-warning" style="height: 100px; width: 30px"></div>
	<div
		class="w-10 d-flex align-items-center justify-content-center px-3"
		style="height: 100px"
	>
		Memory/Storage Systems
	</div>
</div>; */
}

export function createListCard(content) {
	// 創建容器元素
	const listCard = document.createElement("div");
	listCard.classList.add("d-flex", "flex-row", "flex-grow-1", "fs-5", "mb-3");

	// 創建標題元素
	const sectionTitle = document.createElement("div");
	sectionTitle.classList.add("research-topic-box");
	sectionTitle.style.height = "100px";
	sectionTitle.style.width = "30px";

	// 創建內容元素
	const sectionContent = document.createElement("div");
	sectionContent.classList.add(
		"d-flex",
		"align-items-center",
		"justify-content-center",
		"px-3",
		"border",
		"border-start-0",
		"border-1",
		"flex-grow-1",
		"bg-white"
	);
	sectionContent.style.height = "100px";
	sectionContent.innerHTML = content;

	// 將標題和內容加入容器
	listCard.appendChild(sectionTitle);
	listCard.appendChild(sectionContent);

	return listCard;
}
