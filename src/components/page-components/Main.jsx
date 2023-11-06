"use client";
// import FullCalendar from "@fullcalendar/react";
// import daygridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import listPlugin from "@fullcalendar/list";
// import Quote from "./Quote";
import { useState, useEffect } from "react";
import axios from "axios";
import { buttonVariants } from "../ui/button";
import { Button } from "../ui/button";

const Main = () => {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

	const quoteAPI = async () => {
		let arrOfQuotes = [];
		try {
			const data = await axios.get("https://api.quotable.io/random");
			arrOfQuotes = data.data;
			console.log(arrOfQuotes);
		} catch (e) {
			console.log(e);
		}

		try {
			setQuote(arrOfQuotes.content);
			setAuthor(arrOfQuotes.author);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		quoteAPI();
	}, []);

	return (
		<div className="flex justify-evenly w-full h-screen border border-red-400">
			{/* Today's Events View */}

			{/* Section for Daily API Content */}
			<div className="flex-1 h-4">
				<h2 className="text-center">Daily API Content</h2>
				{/* <button>Request</button> */}
				{/* <Quote /> */}
				<div className="w-full flex flex-col p-4">
					<div>
						{quote}
						{author}
					</div>

					<Button className={buttonVariants()} onClick={quoteAPI}>
						Give me a Quote
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Main;
