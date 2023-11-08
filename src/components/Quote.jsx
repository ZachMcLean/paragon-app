"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { buttonVariants } from "./ui/button";
import { Button } from "./ui/button";

const Quote = () => {
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
		<article className="">
			<h2 className="">Daily API Content</h2>
			{/* <button>Request</button> */}
			{/* <Quote /> */}
			<div className="">
				<div>
					{quote}
					{author}
				</div>

				<Button className={buttonVariants()} onClick={quoteAPI}>
					Give me a Quote
				</Button>
			</div>
		</article>
	);
};

export default Quote;
