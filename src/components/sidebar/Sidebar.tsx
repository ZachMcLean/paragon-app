"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronFirst, ChevronLast, Eye, MoreVertical } from "lucide-react";
import { links, menus } from "@/lib/links";
import Paragon from "../../../public/svg/paragon.svg";
import Quote from "@/components/Quote";

export default function Sidebar() {
	const [open, setOpen] = useState(false);

	return (
		<aside className="max-w-[18rem] h-screen text-white bg-[#303030] shadow-xl">
			<nav
				className={`${open ? "w-64" : "w-20"} 
					h-full flex flex-col 
					border-r border-black/10 shadow-sm transition-all`}
			>
				<Link
					href=""
					className={`${
						!open
							? "flex justify-center py-4 my-1"
							: "flex justify-between py-2 pr-3"
					}  items-center`}
				>
					<div
						className={`${!open ? "hidden" : ""} 
						flex items-center justify-center`}
					>
						{/* <Eye /> */}
						<Image
							alt="Logo for paragon calendar app"
							src={Paragon}
							className={` cursor-pointer duration-500 object-cover w-14 h-14 ${
								open && "rotate-[360deg]"
							}`}
						/>
						<h2 className="font-thin  text-2xl">Paragon</h2>
					</div>
					<button
						onClick={() => setOpen((open) => !open)}
						className="p-1 rounded-lg bg-gray-700 hover:bg-[#302384]"
					>
						{open ? <ChevronFirst size={25} /> : <ChevronLast size={25} />}
					</button>

					{/* <button
						onClick={() => setOpen((open) => !open)}
						className="p-1 rounded-lg bg-gray-400 hover:bg-gray-300"
					>
						{open ? <ChevronFirst size={25} /> : <ChevronLast size={25} />}
					</button> */}
				</Link>

				<ul className="flex-1  py-8 px-2 border-t border-white/10">
					{links.map((link, index) => (
						<li
							className={`${
								!open ? "flex justify-center" : ""
							} text-gray-900 my-3 py-2 rounded-md border border-gray-400/10 shadow-sm
								hover:bg-[#302384] hover:shadow-lg`}
							key={link.hash}
						>
							<Link
								className={`${!open ? "" : "flex items-center"}`}
								href={link.hash}
							>
								{link.icon}
								<span
									className={`${
										!open ? "w-0 hidden" : "w-52 ml-3"
									} text-gray-200`}
								>
									{link.text}
								</span>
							</Link>
						</li>
					))}
				</ul>

				{/* <hr className="my-3" /> */}

				<Quote open={open} />

				<div className={` border-t border-white/10 flex p-3 pt-4`}>
					<div className="border bg-[#333333] ">
						<div className="w-10 h-10 text-center text-white font-[36px] leading-[100px]"></div>
					</div>
					<div
						className={`flex justify-between items-center
              				overflow-hidden transition-all p-3 bg-[#333333] 
							rounded-xl
					${!open ? "w-0" : "w-52 ml-3"}`}
					>
						{/* gray box */}
						{/* name and email */}
						<div className={`${!open ? "hidden" : ""} leading-5`}>
							<h4 className="font-semibold">John Doe</h4>
							<span className="text-xs text-gray-600">johndoe@gmail.com</span>
						</div>
						{/* vertical 3 dots icon */}
						{!open ? "" : <MoreVertical size={20} />}
					</div>
				</div>
			</nav>
		</aside>
	);
}
