function createResearchSection(title, content) {
	// 創建容器元素
	const sectionContainer = document.createElement("div");
	sectionContainer.classList.add("d-flex", "flex-column", "my-2");

	// 創建標題元素
	const sectionTitle = document.createElement("div");
	sectionTitle.classList.add(
		"fw-bold",
		"fs-3",
		"p-2",
		"px-4",
		"text-white",
		"bg-primary",
		"bg-opacity-70"
	);
	sectionTitle.textContent = title;

	// 創建內容元素
	const sectionContent = document.createElement("div");
	sectionContent.classList.add("fs-5", "p-4", "bg-body-tertiary");
	sectionContent.innerHTML = content;

	// 將標題和內容加入容器
	sectionContainer.appendChild(sectionTitle);
	sectionContainer.appendChild(sectionContent);

	return sectionContainer;
}

function loadResearchSections() {
	const container = document.getElementById("research-sections");

	// 定義不同的 section
	const sections = [
		{
			title: "Emerging memory and its application",
			content: `
              這方向主要探討的媒介是 3D NAND flash memory, Phase change memory
						(PCM), Resistive RAM (ReRAM), Optane DC Persistent Memory, Racetrack
						Memory
						等主流及具潛力的非揮發性記憶體。我的研究主題都在於如用針對這些非揮發性記憶體(Non-volatile
						Memory)的特性，去設計及優化儲存裝置的效能以及可靠度。而我們接下來幾年主要會關注在
						Deep Learning, Graph Processing, File
						System…等相關應用上面，探索在這些應用上如何進一步透過記憶體技術來協助這些應用，使得整體效能更好、可靠度更高。
          `,
		},
		{
			title: "Processing-in-memory techniques",
			content: `
              由於近年的各類應用 (e.g., Neural Network Training or DNA Sequencing)
						所需的計算量以及資料處理量越來越大，傳統的 Von Neumann architecture
						的計算機架構下必備的 Memory hierarchy 在運算之前所需要的資料傳輸
						(Cache-Memory-Storage I/O transfer)
						已經逐漸變成系統效能瓶頸的主要原因，為打破此一困境，現在兩條具備潛力的解決方案分別為
						“Near-Memory Computing" 以及 “In-Memory
						Computing"，前者的代表產品像是 UPMEM、後者的代表產品則是 ReRAM
						cross-bar
						accelerator，而我們則是注重在這兩類產品上的系統管理以及演算法開發，使之可以充分發揮其效能。
          `,
		},
		{
			title: "高解析度物體辨識以及高速物體追蹤",
			content: `
              一般基於卷積神經網路（CNN）的物件辨識框架，如Faster R-CNN、SSD、Mask
						R-CNN、YOLO等，大多具有良好的表現。然而其對輸入的影像圖片尺寸有其大小限制，因而如果要實現高解析度的物體辨識則需要分成多張小圖來處理，以至於每秒可處理的偵數遠小於實用的需求，另外高速物體追蹤則是會因為高速移動的物體會在影像中留下軌跡，使得影像辨識不易，因此這此二應用仍存在著諸多設計議題，而我們則是希望以系統角度，討論在現有的AI加速晶片(e.g.,
						Nvidia Jetson Xavier, NANO)上如何進一步解決現有的問題。
          `,
		},
	];

	// 動態插入 section
	sections.forEach(({ title, content }) => {
		const section = createResearchSection(title, content);
		container.appendChild(section);
	});
}

window.addEventListener("DOMContentLoaded", loadResearchSections);
