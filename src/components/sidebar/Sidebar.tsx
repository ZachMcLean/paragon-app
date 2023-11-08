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
		<aside className="h-screen bg-gray-400">
			<nav
				className={`${
					open ? "w-62" : "w-18"
				} h-full flex flex-col border-r border-black/10 shadow-sm transition-all  `}
			>
				<Link
					href=""
					className={`${
						!open ? "flex justify-center" : "flex justify-between"
					} p-2 items-center`}
				>
					<div
						className={`${
							!open ? "hidden" : ""
						} flex items-center justify-center`}
					>
						{/* <Eye /> */}
						<Image
							alt=""
							src={Paragon}
							className={`bg-gray-400 cursor-pointer duration-500 object-cover w-16 h-16 ${
								open && "rotate-[360deg]"
							}`}
						/>
						<h2 className="ml-2">Paragon</h2>
					</div>
					<button
						onClick={() => setOpen((open) => !open)}
						className="p-1 rounded-lg bg-gray-400 hover:bg-gray-300"
					>
						{open ? <ChevronFirst size={25} /> : <ChevronLast size={25} />}
					</button>
				</Link>

				<ul className="flex-1 pt-4 px-2 border-t border-black/10">
					{links.map((link, index) => (
						<li
							className={`${
								!open ? "flex justify-center" : ""
							} text-gray-900 my-3 p-1 rounded-md border `}
							key={link.hash}
						>
							<Link
								className={`${!open ? "" : "flex items-center"}`}
								href={link.hash}
							>
								{link.icon}
								<span className={`${!open ? "w-0 hidden" : "w-52 ml-3"}`}>
									{link.text}
								</span>
							</Link>
						</li>
					))}
				</ul>

				<div
					className={`${
						!open ? "hidden" : ""
					} max-w-[20rem] w-full flex-1 bg-gray-600 border border-white/10 rounded-xl my-2 px-2`}
				>
					<Quote />
				</div>

				<div className={` border-t border-black/10 flex p-3`}>
					<div className="border bg-[#333333]">
						<div className="w-10 h-10 text-center text-white font-[36px] leading-[100px]"></div>
					</div>
					<div
						className={`flex justify-between items-center
              overflow-hidden transition-all ${!open ? "w-0" : "w-52 ml-3"}`}
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
