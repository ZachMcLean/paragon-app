"use client";
import React from "react";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";
import NoteForm from "@/components/notes/NoteForm";

const CreateNote = () => {
	const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
		console.log(data);
	};
	return (
		<div className="container h-full pt-12">
			<h1 className="text-2xl my-4 font-bold text-center">Add new post</h1>
			<NoteForm submit={handleCreatePost} />
		</div>
	);
};

export default CreateNote;
