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

		<div className="max-w-full flex justify-center px-4 bg-zinc-100">
			<div className="flex-none ">
				<button className="btn btn-square btn-ghost">
					{/* <svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-5 h-5 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg> */}
					{/* <Home /> */}
					<Eye />
					<h2>Paragon</h2>
				</button>
			</div>
			<div className="flex-1">
				{/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
				{/* <Link href="/">
					<Home />
				</Link> */}
			</div>
			<div className="flex-none">
				{session?.user ? (
					<UserAccountnav /> // sing out button
				) : (
					<Link className={buttonVariants()} href="/sign-in">
						Sign In
					</Link>
				)}

				{/* <button className="btn btn-square btn-ghost">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
				</button> */}
			</div>
		</div>
	);
};

export default Navbar;
