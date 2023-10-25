"use client";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const Main = () => {
	return (
		<div className="flex justify-evenly w-full h-screen border border-red-400">
			{/* Full-Calendar List View */}
			<div className="flex-1 w-full h-screen">
				<FullCalendar
					// className="max-w-5xl mx-10 my-auto"
					// ref={calendarRef}
					// nowIndicator={true}
					// now={"2018-02-13T09:25:00"} // just for demo
					// editable
					// selectable={true}
					// events={events}
					// select={handleSelect}
					titleFormat={{
						day: "numeric",
						month: "short",
					}}
					headerToolbar={{
						end: "",
					}}
					footerToolbar={{
						// center: "title",
						// start: "today prev next",
						end: "listWeek timeGridDay",
					}}
					// eventContent={(info) => <EventItem info={info} />}
					plugins={[listPlugin, timeGridPlugin]}
					initialView="timeGridDay"
					timeZone="UTC"
					// eventContent={renderEventContent}
				/>
			</div>

			{/* Section for Daily API Content */}
			<div className="flex-1">
				<h2>Daily API Content</h2>
				<button>Request</button>
			</div>

			{/* Section for rendering a list of Notes */}
			<div>
				<h2>Section for Notes</h2>
				<button>Add Note</button>
			</div>
		</div>
	);
};

export default Main;
