"use client";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";

// Shadcn Popover
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

// import {
// 	Popover,
// 	PopoverContent,
// 	PopoverTrigger,
// 	PopoverAnchor,
// 	PopoverClose,
// } from "@/components/ui/popover";

import EventItem from "./EventItem";
import EventModalForm from "./EventModalForm";

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

function handleToday(obj) {
	const { el, isToday, dayNumberText } = obj;
	const item = el.classList[3];
	if (isToday) {
		let string = document.getElementById(`fc-dom-109`);
		// string.className = "myclassname";
		// dayNumberText.className === "myclassname";
		console.log(isToday, dayNumberText, string, el, item);
	}
}

const Calendar = () => {
	const [dateStyle, setDateStyle] = useState("myclassname");

	const [events, setEvents] = useState([]);

	const [open, onOpenChange] = useState();

	const [selectInfo, setSelectInfo] = useState([]);
	const calendarRef = useRef();

	// useEffect(() => {
	// 	if(inputRef.currentValue !== undefined) {
	// 		inputRef.current = info;
	// 	}
	// 	const handleAction();
	// }, )

	const handleSelect = (select) => {
		setSelectInfo(select);
		// console.log("open: " + open);
		console.log("info: " + select);
	};

	const handleDateClick = (dateclick) => {
		setSelectInfo(dateclick);
		onOpenChange(true);
	};

	// const renderEventContent = (eventInfo) => {
	// 	return (
	// 		<>
	// 			<b>{eventInfo.timeText}</b>
	// 			<i>{eventInfo.event.title}</i>
	// 		</>
	// 	);
	// };

	return (
		<section className="h-full relative">
			{/* <h1 className="text-right">Calendar</h1> */}
			<FullCalendar
				// className="max-w-5xl mx-10 my-auto"
				ref={calendarRef}
				nowIndicator={true}
				// now={"2018-02-13T09:25:00"} // just for demo
				editable
				selectable={true}
				events={events}
				dateClick={handleDateClick}
				select={(select) => document.getElementById("my_modal_1").showModal()}
				titleFormat={{
					year: "numeric",
					month: "long",
				}}
				headerToolbar={{
					center: "title",
					start: "today prev next",
					end: "dayGridMonth,timeGridWeek,timeGridDay",
				}}
				eventContent={(info) => <EventItem info={info} />}
				plugins={[daygridPlugin, interactionPlugin, timeGridPlugin]}
				views={[
					"dayGridMonth",
					"timeGridWeek",
					"timeGridDay",
					// "timeGridDay",
					// "timeGridWeek",
				]}
				initialView="timeGridWeek"
				timeZone="UTC"
				allDaySlot={false}
				eventClassNames={"myclassname"}
				eventBackgroundColor="myclassname"
				// slotDuration="00:30:00"
				slotLabelInterval={{ hours: 1 }}
				height="100vh"
				navLinks={true}
				dayCellDidMount={(arg) => {
					handleToday(arg);
				}}
			/>

			<EventModalForm
				events={events}
				setEvents={setEvents}
				selectInfo={selectInfo}
			/>
		</section>
	);
};

export default Calendar;
