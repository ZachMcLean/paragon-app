"use client";
import React, { FC } from "react";
import Link from "next/link";
import { Pencil, Trash } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ButtonActionProps {
	id: string;
}

const ButtonAction: FC<ButtonActionProps> = ({ id }) => {
	const router = useRouter();
	const { mutate: deleteNote, isPending: isLoading } = useMutation({
		mutationFn: async () => {
			return axios.delete(`/api/notes/${id}`);
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
		<div>
			{/* this is where we navigate to the note(get the id) */}
			<Link href={`/edit-note/${id}`} className="btn mr-2">
				<Pencil /> Edit
			</Link>
			<button onClick={() => deleteNote()} className="btn btn-error">
				{isLoading && <span className="loading loading-spinner"></span>}
				{isLoading ? (
					"loading..."
				) : (
					<>
						<Trash /> Delete
					</>
				)}
			</button>
		</div>
	);
};

export default ButtonAction;
