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

export const dayNumStyle = "background-color: red;";

const styles = "w-8 h-8 p-1 rounded-lg";

export const links = [
	{
		text: "Calendar",
		hash: "/calendar",
		icon: React.createElement(CalendarDays, {
			color: "white",
			// size: "25",
			className: `${styles}`,
		}),
	},
	{
		text: "Notes",
		hash: "/notes",
		icon: React.createElement(ScrollText, {
			color: "white",
			className: styles,
		}),
	},
	{
		text: "Routines",
		hash: "/routines",
		icon: React.createElement(Sunrise, {
			color: "white",
			className: styles,
		}),
	},
	{
		text: "Profile",
		hash: "/admin",
		icon: React.createElement(User, {
			color: "white",
			className: styles,
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
