import User from "@/components/User";
import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
// import Image from "next/image";
// import Link from "next/link";
// import Calendar from "@/components/calendar/Calendar";
// import Main from "@/components/Main";
import Intro from "@/components/page-components/Intro";

export default async function Home() {
	const session = await getServerSession(authOptions);
	return (
		<div className="min-h-full py-4 px-4 ">
			<Intro />
			{/* <Main /> */}
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
