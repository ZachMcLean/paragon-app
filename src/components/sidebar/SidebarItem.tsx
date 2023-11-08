// export function SidebarItem({ icon, text, active, alert }) {
// 	const { expanded } = useContext(SidebarContext);
// 	return (
// 		<li
// 			className={`relative flex items-center py-2 px-3 my-1
// 						font-medium rounded-md cursor-pointer
// 						transition-colors bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800

// 					`}
// 		>
// 			{icon}
// 			<span className={`${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
// 			{alert && (
// 				<div
// 					className={` w-25 h-25 rounded bg-red-400 ${expanded ? "" : "top-2"}`}
// 				/>
// 			)}
// 		</li>
// 	);
// }
import React, { useState } from "react";
import { links } from "@/lib/links";
import Link from "next/link";

type SidebarItemProps = (typeof links)[number];

export default function SidebarItem({ text, hash, icon }: SidebarItemProps) {
	const [open, setOpen] = useState(true);
	return (
		<li
			className={`${
				!open ? "justify-center" : ""
			} text-gray-900 my-3 p-2 rounded-lg border border-black/20`}
			key={hash}
		>
			<Link className={`${!open ? "" : "flex"}`} href={hash}>
				<div className="bg-indigo-500">{icon}</div>
				<span className={`${!open ? "w-0 hidden" : "w-52 ml-3"}`}>{text}</span>
			</Link>
		</li>
	);
}
