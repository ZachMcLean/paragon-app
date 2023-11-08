"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import { menus } from "@/lib/links";
import Paragon from "../../../public/svg/paragon.svg";

export default function Test() {
	const [open, setOpen] = useState(true);

	return (
		<div className="flex bg-red-800">
			<div
				className={` ${
					open ? "w-72" : "w-20 "
				} bg-red-800 h-screen p-5 pt-8 relative duration-300`}
			>
				<Eye
					className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
					onClick={() => setOpen(!open)}
				/>

				<div className="flex gap-x-4 items-center">
					<Image
						alt=""
						src={Paragon}
						className={`cursor-pointer duration-500 object-cover w-16 h-16 ${
							open && "rotate-[360deg]"
						}`}
					/>
					<h1
						className={`text-white origin-left font-medium text-xl duration-200 ${
							!open && "scale-0"
						}`}
					>
						Designer
					</h1>
				</div>
				<ul className="pt-6">
					{menus.map((menu, index) => (
						<li
							key={index}
							className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${menu.gap ? "mt-9" : "mt-2"} ${
								index === 0 && "bg-light-white"
							} `}
						>
							{menu.src}
							<span className={`${!open && "hidden"} origin-left duration-200`}>
								{menu.title}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
