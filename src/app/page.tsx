import User from "@/components/User";
import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import Calendar from "@/components/calendar/Calendar";

export default async function Home() {
	const session = await getServerSession(authOptions);
	return (
		<div className="min-h-full py-4 px-4">
			<h1>Home</h1>
			{/* <Calendar /> */}
			{/* <h1 className="text-4xl">Home</h1> */}
			{/* <Link className={buttonVariants()} href="/admin">
				Open My Admin
			</Link> */}

			{/* <h2>Client Session</h2>
			<User />
			<h2>Server Session</h2>
			{JSON.stringify(session)} */}
		</div>
	);
}
