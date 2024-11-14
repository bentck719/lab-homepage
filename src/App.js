import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="d-flex justify-content-center">
				<Carousel />
			</div>
		</div>
	);
}

export default App;
