"use client";
import BackButton from "@/components/notes/BackButton";
import NoteForm from "@/components/notes/NoteForm";
import { FormInputPost } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosHeaders } from "axios";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { SubmitHandler } from "react-hook-form";

interface EditNoteProps {
	params: {
		id: string;
	};
}

const EditNote: FC<EditNoteProps> = ({ params }) => {
	const { id } = params;

	const router = useRouter();
	// this is where we get the data for populate input
	const { data: dataNote, isLoading: isLoadingNote } = useQuery({
		queryKey: ["notes", id],
		queryFn: async () => {
			const response = await axios.get(`/api/notes/${id}`);
			return response.data;
		},
	});

	const { mutate: updateNote, isPending: isLoadingSubmit } = useMutation({
		mutationFn: (newNote: FormInputPost) => {
			return axios.patch(`/api/notes/${id}`, newNote);
		},
		onError: (error) => {
			console.log(error);
		},
		onSuccess: () => {
			router.push("/notes");
			router.refresh();
		},
	});

	const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
		updateNote(data);
	};

	if (isLoadingNote) {
		return (
			<div className="text-center">
				<span className="loading loading-spinner loading-lg"></span>
			</div>
		);
	}

	return (
		<div className="container h-full pt-12">
			<BackButton />
			<h1 className="text-2xl my-4 font-bold text-center">Edit Note</h1>
			<NoteForm
				isLoadingSubmit={isLoadingSubmit}
				submit={handleEditPost}
				isEditing
				initialValue={dataNote}
			/>
		</div>
	);
};

export default EditNote;
