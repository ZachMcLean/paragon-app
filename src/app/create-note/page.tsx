"use client";
import React from "react";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";
import NoteForm from "@/components/notes/NoteForm";
import BackButton from "@/components/notes/BackButton";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateNote = () => {
	const router = useRouter();

	const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
		createNote(data);
	};

	const { mutate: createNote, isPending: isLoadingSubmit } = useMutation({
		mutationFn: (newPost: FormInputPost) => {
			return axios.post("/api/notes/create", newPost);
		},
		onError: (error) => {
			console.log(error);
		},
		onSuccess: () => {
			router.push("/notes");
			router.refresh();
		},
	});

	return (
		<div className="container h-full pt-12">
			<BackButton />
			<h1 className="text-2xl my-4 font-bold text-center">Add new post</h1>
			<NoteForm
				isLoadingSubmit={isLoadingSubmit}
				submit={handleCreatePost}
				isEditing={false}
			/>
		</div>
	);
};

export default CreateNote;
