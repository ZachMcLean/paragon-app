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
			// console.log(arrOfQuotes); // shows the quote object in console
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
			className={`${!open ? "hidden" : ""}  
				w-[300px] flex-1 border border-white/10 rounded-xl my-2`}
		>
			<div className="max-w-[2rem] h-full flex flex-col justify-around p-2 text-left bg-[#733fd7]">
				<h2 className="italic py-4 font-semibold">Quote of the Day: </h2>

				<div className="flex flex-col py-4">
					<div className="text-gray-500/70">{quote}</div>
					<div className="mt-2">- {author}</div>
				</div>
				<button className={``} onClick={quoteAPI}>
					Give me a Quote
				</button>
			</div>
		</article>
	);
};

export default Quote;
