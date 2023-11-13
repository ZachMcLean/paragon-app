import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import SidebarContainer from "@/components/sidebar/sidebar-container";
import Test from "@/components/sidebar/Test";
import Sidebar from "@/components/sidebar/Sidebar";
// import Sidebar, { SidebarItem } from "../components/sidebar/Sidebar";
import {
	Eye,
	CalendarDays,
	ScrollText,
	Sunrise,
	Sunset,
	User,
	LogIn,
	LogOut,
	Settings,
	LifeBuoy,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="">
			<body className={inter.className}>
				<Provider>
					<main className="text-white bg-[#303030] flex">
						{/* <Navbar /> */}
						{/* <SidebarContainer /> */}
						{/* <Test /> */}
						<Sidebar />
						{children}
					</main>
					<Toaster />
				</Provider>
			</body>
		</html>
	);
}
