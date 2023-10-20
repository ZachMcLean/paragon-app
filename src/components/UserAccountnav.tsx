"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

// So the main reason this component exists is bc in order to use the
// next-auth signOut function, you need to use useSession() instead of
// getServerSession bc it has to be a client component
// However, getServerSession is much faster, so by creating a new component, we can have both speed
// while keeping navbar a server component

const UserAccountnav = () => {
	return (
		<Button
			onClick={() =>
				signOut({
					redirect: true,
					callbackUrl: `${window.location.origin}/sign-in`,
				})
			}
			variant="destructive"
		>
			Sign Out
		</Button>
	);
};

export default UserAccountnav;
