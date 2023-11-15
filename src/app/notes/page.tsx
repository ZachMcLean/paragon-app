import NoteCard from "@/components/notes/NoteCard";
import { db } from "@/lib/db";
import Link from "next/link";

async function getNotes() {
	const response = await db.note.findMany({
		select: {
			id: true,
			title: true,
			content: true,
			tag: true,
		},
		orderBy: {
			createdAt: "desc",
		},
	});
	return response;
}

export default async function Notes() {
	const notes = await getNotes();
	console.log(notes);
	return (
		<section>
			<div>
				<Link href="/create-note" className="btn btn-ghost">
					Create Post
				</Link>
			</div>
			<div className="w-full grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
				{notes.map((note) => (
					<NoteCard key={note.id} note={note} />
				))}
			</div>
		</section>
	);
}
