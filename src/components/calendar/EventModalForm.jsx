"use client";
import React, { useRef, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";

const EventModalForm = ({ events, setEvents, selectInfo }) => {
	const [startValue, onStartChange] = useState(new Date());
	const [endValue, onEndChange] = useState(new Date());

	const eventInputRef = useRef();

	const handleAction = () => {
		const { start, end } = eventInfo;
		console.log(eventInfo);

		// console.log(value);
		// console.log(eventInputRef.current.value);
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

	return (
		<dialog id="my_modal_1" className="modal">
			<div className="modal-box">
				<h3 className="font-bold text-lg">Title</h3>
				<p className="py-4">Press ESC key or click the button below to close</p>
				<div className="modal-action">
					{/* <form method="dialog"> */}
					{/* if there is a button in form, it will close the modal */}
					{/* <button className="btn">Close</button> */}
					{/* </form> */}
					<form className="flex flex-col justify-evenly items-center">
						<input
							type="text"
							// {...register("title", { required: true })}
							placeholder="post title..."
							className="input input-bordered w-full max-w-lg my-4"
						/>
						<div className="bg-gray-300 border borderblack/50 w-full">
							<DateTimePicker
								className={` `}
								onChange={onStartChange}
								value={startValue}
							/>
						</div>
						<div className="mb-3">
							<DateTimePicker
								className={`light bg-white my-3`}
								onChange={onEndChange}
								value={endValue}
							/>
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
							onClick={() => handleAction(e)}
							type="submit"
							className="btn btn-primary w-full max-w-lg"
						></button>
					</form>
				</div>
			</div>
		</dialog>
	);
};

export default EventModalForm;
