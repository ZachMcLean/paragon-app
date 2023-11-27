import React from "react";
import Calendar from "@/components/calendar/Calendar";
import { db } from "@/lib/db";

async function getEvents() {
	const response = await db.event.findMany({
		select: {
			id: true,
			title: true,
			color: true,
			startTime: true,
			endTime: true,
			user: true,
		},
		orderBy: {
			createdAt: "desc",
		},
	});
	return response;
}

const CalendarPage = async () => {
	const events = await getEvents();
	return (
		<section className="w-full h-screen">
			<Calendar />
		</section>
	);
};

export default CalendarPage;
