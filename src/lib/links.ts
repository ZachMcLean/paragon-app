import React from "react";
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

export const links = [
	{
		text: "Calendar",
		hash: "/calendar",
		icon: React.createElement(CalendarDays, {
			size: "25",
			className: "w-10 h-10 p-1 rounded-lg bg-gray-200 hover:bg-gray-300",
		}),
	},
	{
		text: "Notes",
		hash: "/notes",
		icon: React.createElement(ScrollText, {
			size: "25",
			className: "w-10 h-10 p-1 rounded-lg bg-gray-300 hover:bg-gray-400",
		}),
	},
	{
		text: "Routines",
		hash: "/routines",
		icon: React.createElement(Sunrise, {
			className: "w-10 h-10 p-1 rounded-lg bg-gray-200 hover:bg-gray-300",
		}),
	},
	{
		text: "Profile",
		hash: "/profile",
		icon: React.createElement(User, {
			className: "w-10 h-10 p-1 rounded-lg bg-gray-200 hover:bg-gray-300",
		}),
	},
] as const;

export const menus = [
	{ title: "Dashboard", src: React.createElement(CalendarDays) },
	{ title: "Inbox", src: React.createElement(LogIn) },
	{ title: "Calendar", src: React.createElement(User), gap: true },
	{ title: "Notes ", src: React.createElement(ScrollText) },
	{ title: "Routines", src: React.createElement(Sunrise) },
	{ title: "Profile", src: React.createElement(Eye) },
	{ title: "Settings ", src: React.createElement(Settings), gap: true },
	{ title: "Help", src: React.createElement(LifeBuoy) },
];
