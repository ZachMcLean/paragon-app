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

// const ACTIONS = {
// 	INCREMENT: "increment",
// 	DECREMENT: "decrement",
// };

// function reducer(state, action) {
// 	switch (action.type) {
// 		case ACTIONS.INCREMENT:
// 			return { count: state.increment + 1 };
// 		case ACTIONS.DECREMENT:
// 			return { count: state.decrement - 1 };
// 		default:
// 			return state;
// 	}
// }

const Calendar = () => {
	// const inputRef = useRef();
	// const [state, dispatch] = useReducer(reducer, { select });
	const [events, setEvents] = useState([]);
	const [eventInfo, setInfo] = useState([]);
	// const [eventInfo, setEventInfo] = useState([]);
	// state for Shadcn UI Dialog
	// const [showModal, setShowModal] = useState(false);

	// state for NextUI Modal
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	// state for NextUI Input
	const [value, setValue] = useState("");

	// useEffect(() => {
	// 	if(inputRef.currentValue !== undefined) {
	// 		inputRef.current = info;
	// 	}
	// 	const handleAction();
	// }, )

	const handleSelect = (info) => {
		// console.log(info);
		// const { start, end } =
		setInfo(info);
		onOpen();
		// console.log(info);
		// console.log(inputRef.current);
		// inputRef.current = info;

		// console.log(inputRef.current);
		// dispatch({ type: "select" });
		// const { start, end } = eventInfo;
		// const end = handleAction(info);
		// setEventInfo([...info, { start: start, end: end }]);
		// handleAction(info);
	};

	const handleAction = () => {
		// const handlePrompt = prompt("Enter your event");
		// const modalInput = setValue;
		// setEventInfo(info);
		// console.log(test);
		// const c = inputRef.current;
		// console.log(inputRef);
		const { start, end } = eventInfo;
		console.log(eventInfo);
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
		<div>
			{/* <h1 className="text-right">Calendar</h1> */}
			<FullCalendar
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
					end: "dayGridMonth dayGridWeek dayGridDay",
				}}
				eventContent={(info) => <EventItem info={info} />}
				plugins={[daygridPlugin, interactionPlugin]}
				views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
				initialView="dayGridMonth"
				timeZone="UTC"
				// eventContent={renderEventContent}
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
									// ref={inputRef}
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
		</div>
	);
};

export default Calendar;
