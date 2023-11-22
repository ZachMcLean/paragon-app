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

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
	PopoverAnchor,
	PopoverClose,
} from "@/components/ui/popover";

import DateTimePicker from "react-datetime-picker";
// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventItem = ({ info }) => {
	const { event } = info;
	return (
		<div>
			<p>{event.title}</p>
		</div>
	);
};

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
	//
	const [value, onChange] = useState(new Date());

	const [dateStyle, setDateStyle] = useState("myclassname");

	const [events, setEvents] = useState([]);
	const [eventInfo, setInfo] = useState([]);

	// state for NextUI Modal
	// const { isOpen, onOpen, onOpenChange } = useDisclosure();

	// Popover
	const [open, onOpenChange] = useState();

	// state for NextUI Input
	// const [value, setValue] = useState("");
	const calendarRef = useRef();

	const eventInputRef = useRef();

	// useEffect(() => {
	// 	if(inputRef.currentValue !== undefined) {
	// 		inputRef.current = info;
	// 	}
	// 	const handleAction();
	// }, )

	const handleSelect = (info) => {
		setInfo(info);
		onOpenChange(true);
		console.log("open: " + open);
		console.log("info: " + info);
	};

	const handleDateClick = (info) => {
		setInfo(info);
		onOpenChange(true);
	};

	const handleAction = () => {
		const { start, end } = eventInfo;
		console.log(eventInfo);

		// console.log(value);
		console.log(eventInputRef.current.value);
		setEvents([
			...events,
			{
				start: start,
				end: end,
				title: eventInputRef.current.value,
				id: uuid(),
			},
			// eventColor: '#378006'
		]);
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
				select={handleSelect}
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

			<Popover modal className="" open={open} onOpenChange={onOpenChange}>
				{/* <PopoverTrigger>
					<Button variant="destructive">open menu</Button>
				</PopoverTrigger> */}
				<PopoverAnchor asChild>
					<div className="">
						<PopoverTrigger asChild></PopoverTrigger>
					</div>
				</PopoverAnchor>
				<PopoverContent className="w-80 ">
					<div className=" flex flex-col w-full max-w-sm items-center space-x-2 h-full">
						{/* <Input
							type="text"
							ref={eventInputRef}
							// value={value}
							// setValue={setValue}
							placeholder="Input Text Here:"
						/> */}
						<div className="flex justify-between items-center pb-10">
							<h3>Add Title</h3>
							<PopoverClose className="PopoverClose" aria-label="Close">
								<X />
							</PopoverClose>
						</div>
						<form className="flex flex-col justify-evenly items-center">
							<input
								type="text"
								// {...register("title", { required: true })}
								placeholder="post title..."
								className="input input-bordered w-full max-w-lg my-4"
							/>
							<div className="p-2 my-2 bg-gray-300 border borderblack/50">
								<DateTimePicker onChange={onChange} value={value} />
							</div>

							<textarea
								className="textarea textarea-bordered w-full max-w-lg"
								placeholder="description..."
							></textarea>

							<select
								className="select select-bordered w-full max-w-lg my-4"
								defaultValue={""}
							>
								<option disabled value="">
									select color
								</option>
								<option value="">red</option>
								<option value="">blue</option>
								<option value="">purple</option>
							</select>
							<button
								onClick={() => handleAction()}
								type="submit"
								className="btn btn-primary w-full max-w-lg"
							></button>
						</form>
						{/* <Button
							onClick={() => handleAction()}
							type="submit"
							variant="primary"
						>
							Submit
						</Button> */}
					</div>
				</PopoverContent>
			</Popover>
		</section>
	);
};

export default Calendar;
