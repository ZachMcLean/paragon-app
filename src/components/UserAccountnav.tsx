"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { Settings } from "lucide-react";

// So the main reason this component exists is bc in order to use the
// next-auth signOut function, you need to use useSession() instead of
// getServerSession bc it has to be a client component
// However, getServerSession is much faster, so by creating a new component, we can have both speed
// while keeping navbar a server component

const UserAccountnav = () => {
	return (
		<button
			className="p-1 mb-4 rounded-lg bg-gray-700 hover:bg-[#302384]"
			onClick={() =>
				signOut({
					redirect: true,
					callbackUrl: `${window.location.origin}/sign-in`,
				})
			}
		>
			Sign Out
		</button>
	);
};

export default UserAccountnav;
