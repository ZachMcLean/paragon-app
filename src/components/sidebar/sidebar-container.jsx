import React from "react";
import Sidebar, { SidebarItem } from "./Sidebar-old";
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
export default function SidebarContainer() {
	return (
		<>
			<Sidebar>
				<SidebarItem icon={<CalendarDays size={20} />} text="Calendar" active />
				<SidebarItem icon={<ScrollText size={20} />} text="Notes" active />
				<SidebarItem icon={<Sunrise size={20} />} text="Routines" />
				<SidebarItem icon={<Eye size={20} />} text="My Profile" />
				<hr className="my-3" />
				<SidebarItem icon={<Settings size={20} />} text="Settings" alert />
				<SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
			</Sidebar>
		</>
	);
}
