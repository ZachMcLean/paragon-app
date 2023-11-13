"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import React, { FC } from "react";

import { FormInputPost } from "@/types";

interface NoteFormProps {
	submit: SubmitHandler<FormInputPost>;
}

const NoteForm: FC<NoteFormProps> = ({ submit }) => {
	const { register, handleSubmit } = useForm<FormInputPost>();

	return (
		<form
			onSubmit={handleSubmit(submit)}
			className="flex flex-col items-center justify-center gap-5 mt-10"
		>
			<input
				type="text"
				{...register("title")}
				placeholder="post title..."
				className="input input-bordered w-full max-w-lg"
			/>
			<textarea
				{...register("content")}
				className="textarea textarea-bordered w-full max-w-lg"
				placeholder="post content..."
			></textarea>
			<select
				{...register("tag")}
				className="select select-bordered w-full max-w-lg"
			>
				<option disabled selected>
					select tags
				</option>
				<option>Han Solo</option>
				<option>Greedo</option>
			</select>

			<button className="btn btn-primary w-full max-w-lg">Create</button>
		</form>
	);
};

export default NoteForm;
