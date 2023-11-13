import NoteCard from "@/components/notes/NoteCard";

export default function Notes() {
	return (
		<main className="w-full grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
			<NoteCard />
			<NoteCard />
			<NoteCard />
			<NoteCard />
			<NoteCard />
			<NoteCard />
		</main>
	);
}
