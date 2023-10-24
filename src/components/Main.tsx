"use client";
import React from "react";

const Main = () => {
	return (
		<div className="flex justify-evenly w-full h-screen border border-red-400">
			{/* Full-Calendar List View */}
			<div>
				<h2>Full-Calendar List View</h2>
				<button>Click me!</button>
			</div>

			{/* Section for Daily API Content */}
			<div>
				<h2>Daily API Content</h2>
				<button>Request</button>
			</div>

			{/* Section for rendering a list of Notes */}
			<div>
				<h2>Section for Notes</h2>
				<button>Add Note</button>
			</div>
		</div>
	);
};

export default Main;
