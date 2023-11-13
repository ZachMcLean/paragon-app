"use client";

// Next UI imports
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Input,
	Checkbox,
	Link,
} from "@nextui-org/react";
import { MailIcon } from "@/components/icons/MailIcon.jsx";
import { LockIcon } from "@/components/icons/LockIcon.jsx";

// Shadcn imports
// import { Button } from "@/components/ui/button";
// import {
// 	Dialog,
// 	DialogContent,
// 	DialogDescription,
// 	DialogFooter,
// 	DialogHeader,
// 	DialogTitle,
// 	DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useReducer, useState, useRef } from "react";
import { v4 as uuid } from "uuid";

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
	const [dateStyle, setDateStyle] = useState("myclassname");

	const [events, setEvents] = useState([]);
	const [eventInfo, setInfo] = useState([]);

	// state for NextUI Modal
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	// state for NextUI Input
	const [value, setValue] = useState("");
	const calendarRef = useRef();

	// useEffect(() => {
	// 	if(inputRef.currentValue !== undefined) {
	// 		inputRef.current = info;
	// 	}
	// 	const handleAction();
	// }, )

	const handleSelect = (info) => {
		setInfo(info);
		onOpen();
	};

	const handleAction = () => {
		const { start, end } = eventInfo;
		console.log(eventInfo);

		console.log(value);
		console.log(calendarRef.current);
		setEvents([
			...events,
			{
				start: start,
				end: end,
				title: value,
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
		<section className="h-full">
			{/* <h1 className="text-right">Calendar</h1> */}
			<FullCalendar
				// className="max-w-5xl mx-10 my-auto"
				ref={calendarRef}
				nowIndicator={true}
				// now={"2018-02-13T09:25:00"} // just for demo
				editable
				selectable={true}
				events={events}
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
				initialView="dayGridMonth"
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

			{/* <Button onPress={onOpen}>Open Modal</Button> */}
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Create a new Event!
							</ModalHeader>
							<ModalBody>
								<Input
									type="text"
									label="Event"
									value={value}
									onValueChange={setValue}
									// ref={valueRef}
								/>
								{/* <Input
									autoFocus
									endContent={
										<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
									}
									label="Email"
									placeholder="Enter your email"
									variant="bordered"
								/>
								<Input
									endContent={
										<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
									}
									label="Password"
									placeholder="Enter your password"
									type="password"
									variant="bordered"
								/>
								<div className="flex py-2 px-1 justify-between">
									<Checkbox
										classNames={{
											label: "text-small",
										}}
									>
										Remember me
									</Checkbox>
									<Link color="primary" href="#" size="sm">
										Forgot password?
									</Link>
								</div> */}
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
								<Button
									type="submit"
									color="primary"
									// onPressChange={handleAction}

									// onSubmit={handleAction()}
									onPress={onClose}
									// onPressEnd={handleAction(eventInfo)}
									onPressEnd={handleAction}
								>
									Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</section>
	);
};

export default Calendar;
