"use client";
import BackButton from "@/components/notes/BackButton";
import NoteForm from "@/components/notes/NoteForm";
import { FormInputPost } from "@/types";
import React from "react";
import { SubmitHandler } from "react-hook-form";

const EditNote = () => {
	const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
		console.log(data);
	};
	return (
		<div className="container h-full pt-12">
			<BackButton />
			<h1 className="text-2xl my-4 font-bold text-center">Edit Note</h1>
			<NoteForm submit={handleEditPost} isEditing />
		</div>
	);
};

export default EditNote;
