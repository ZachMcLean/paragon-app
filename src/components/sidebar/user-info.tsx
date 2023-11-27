import React, { FC } from "react";
import { useSession } from "next-auth/react";
import UserAccountnav from "../UserAccountnav";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { MoreVertical } from "lucide-react";

interface UserInfoProps {
	open: boolean;
}

const UserInfo: FC<UserInfoProps> = ({ open }) => {
	const { data: session } = useSession();

	if (session?.user) {
		return (
			<div
				className={`flex justify-between items-center
					overflow-hidden transition-all p-3 bg-[#333333] 
					rounded-xl
				${!open ? "w-0" : "w-52 ml-3"}`}
			>
				<div className={`${!open ? "hidden" : ""} leading-5 `}>
					<h4 className="font-semibold">{session?.user.username}</h4>
					<span className="text-xs text-gray-600">{session?.user.email}</span>
				</div>
			</div>
		);
	}
	return (
		// <div className={`${!open ? "hidden" : ""} leading-5`}>
		// 	<h4 className="font-semibold">John Doe</h4>
		// 	<span className="text-xs text-gray-600">johndoe@gmail.com</span>
		// </div>
		<div
			className={`${
				!open ? "hidden" : ""
			} flex justify-evenly items-center ml-4`}
		>
			<Link
				className="p-2.5 mx-2 rounded-lg bg-gray-700 hover:bg-[#302384] text-sm"
				href="/sign-up"
			>
				Sign Up
			</Link>

			<Link
				className="p-2.5 mx-2 rounded-lg bg-gray-700 hover:bg-[#302384] text-sm"
				href="/sign-in"
			>
				Sign In
			</Link>
		</div>
	);
};

export default UserInfo;
