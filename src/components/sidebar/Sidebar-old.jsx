"use client";
import React, { useState, createContext, useContext } from "react";
import {
	Eye,
	CalendarDays,
	ScrollText,
	Sunrise,
	Sunset,
	User,
	LogIn,
	LogOut,
	ChevronFirst,
	ChevronLast,
	MoreVertical,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Paragon from "../../../public/svg/paragon.svg";
import { Button, buttonVariants } from "../ui/button";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
	const [expanded, setExpanded] = useState(true);

	return (
		<aside className="h-screen bg-green-600">
			<nav className="h-full flex flex-col border-r shadow-sm">
				<div className="p-4 pb-2 flex justify-between items-center">
					<Image
						alt="The logo for the Paragon Calendar App"
						src={Paragon}
						quality={95}
						className={`overflow-hidden w-16 h-16 object-cover transtion-all
							${expanded ? "w-32" : "w-0"}`}
					/>
					<button
						onClick={() => setExpanded((curr) => !curr)}
						className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
					>
						{expanded ? <ChevronFirst /> : <ChevronLast />}
					</button>
				</div>

				<SidebarContext.Provider value={{ expanded }}>
					<ul className="flex-1 px-3">{children}</ul>
				</SidebarContext.Provider>

				<div className="border-t flex p-3">
					{/* <Image src="" alt="" className="w-10 h10 rounded-md" /> */}
					<div
						className={`flex justify-between items-center overflow-hidden transition-all ${
							expanded ? "w-32" : "w-0"
						}`}
					>
						<div className="leading-4">
							<h4 className="font-semibold">John Doe</h4>
							<span className="text-xs text-gray-600">johndoe@gmail.com</span>
						</div>
						<MoreVertical size={20} />
					</div>
				</div>
			</nav>
		</aside>
	);
}

export function SidebarItem({ icon, text, active, alert }) {
	const { expanded } = useContext(SidebarContext);
	return (
		<li
			className={`relative flex items-center py-2 px-3 my-1
						font-medium rounded-md cursor-pointer
						transition-colors bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800
						
					`}
		>
			{icon}
			<span className={`${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
			{alert && (
				<div
					className={` w-25 h-25 rounded bg-red-400 ${expanded ? "" : "top-2"}`}
				/>
			)}
		</li>
	);
}
