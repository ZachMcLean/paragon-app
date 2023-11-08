"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { buttonVariants } from "./ui/button";
import { Button } from "./ui/button";

const Quote = ({ open }) => {
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
		<article
			className={`${
				!open ? "hidden" : ""
			} max-w-[18rem] w-full flex-1 border border-white/10 rounded-xl my-2 px-2
			  flex flex-col justify-evenly`}
		>
			<h2 className="">Daily API Content</h2>
			{/* <button>Request</button> */}
			{/* <Quote /> */}
			<div className="flex flex-col gap-2">
				<div>{quote}</div>
				<div className="">- {author}</div>
			</div>
			<button className={`justify-start block`} onClick={quoteAPI}>
				Give me a Quote
			</button>
		</article>
	);
};

export default Quote;
