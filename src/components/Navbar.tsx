import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Eye, Home } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { signOut } from "next-auth/react";
import UserAccountnav from "./UserAccountnav";

const Navbar = async () => {
	const session = await getServerSession(authOptions);

	return (
		// <div className="bg-zinc-100 py-2 border-b border-s-zinc-200  w-full z-10 top-0">
		// 	<div className="container flex items-center justify-between">
		// 		<Link href="/">
		// 			<Home />
		// 		</Link>
		// 		{/* if the user is logged in */}
		// {session?.user ? (
		// 	<UserAccountnav /> // sing out button
		// ) : (
		// 	<Link className={buttonVariants()} href="/sign-in">
		// 		Sign In
		// 	</Link>
		// )}
		// 	</div>
		// </div>

		<nav className="bg-zinc-100 w-full">
			<div className="px-8 py-2 flex items-center justify-between mx-auto border border-red-400">
				{/* Logo */}
				<div>
					<Link href="/">
						<div className="flex items-center">
							<Eye />
							<h2>Paragon</h2>
						</div>
						<div className="p-2"></div>
					</Link>
				</div>

				{/* primary nav (left) */}
				<div>
					<Link className={buttonVariants()} href={"/calendar"}>
						Calendar
					</Link>

					{session?.user ? (
						<UserAccountnav /> // sing out button
					) : (
						<Link className={buttonVariants()} href="/sign-in">
							Sign In
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
