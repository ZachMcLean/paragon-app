"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import React, { FC } from "react";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { FormInputPost } from "@/types";
import axios from "axios";
import { Tag } from "@prisma/client";

interface NoteFormProps {
	submit: SubmitHandler<FormInputPost>;
	isEditing: boolean;
	initialValue?: FormInputPost;
	isLoadingSubmit: boolean;
}

const NoteForm: FC<NoteFormProps> = ({
	submit,
	isEditing,
	initialValue,
	isLoadingSubmit,
}) => {
	const { register, handleSubmit } = useForm<FormInputPost>({
		defaultValues: initialValue,
	});

	// fetch list tags
	const { data: dataTags, isPending: isLoadingTags } = useQuery<Tag[]>({
		queryKey: ["tags"],
		queryFn: async () => {
			const response = await axios.get("/api/tags");
			return response.data;
		},
	});
	console.log(dataTags);

	return (
		<form
			onSubmit={handleSubmit(submit)}
			className="flex flex-col items-center justify-center gap-5 mt-10"
		>
			<input
				type="text"
				{...register("title", { required: true })}
				placeholder="post title..."
				className="input input-bordered w-full max-w-lg"
			/>
			<textarea
				{...register("content", { required: true })}
				className="textarea textarea-bordered w-full max-w-lg"
				placeholder="post content..."
			></textarea>
			{isLoadingTags ? (
				<span className="loading loading-infinity loading-lg"></span>
			) : (
				<select
					{...register("tagId", { required: true })}
					className="select select-bordered w-full max-w-lg"
					defaultValue={""}
				>
					<option disabled value="">
						select tags
					</option>
					{dataTags?.map((tag) => (
						<option key={tag.id} value={tag.id}>
							{tag.name}
						</option>
					))}
				</select>
			)}

			<button type="submit" className="btn btn-primary w-full max-w-lg">
				{isLoadingSubmit && <span className="loading loading-spinner"></span>}
				{isEditing
					? isLoadingSubmit
						? "Updating.."
						: "Update"
					: isLoadingSubmit
					? "Creating.."
					: "Create"}
			</button>
		</form>
	);
};

export default NoteForm;
