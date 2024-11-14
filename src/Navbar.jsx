import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
	return (
		<div className="container">
			<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
				<a
					href="/"
					className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
				>
					<span className="fs-4">CSS Lab</span>
				</a>

				<ul className="nav nav-pills">
					<li className="nav-item">
						<a href="#" className="nav-link active" aria-current="page">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Teaching
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Publication
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Honors
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Project
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Academic Activities
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Vita
						</a>
					</li>
				</ul>
			</header>
		</div>
	);
}
