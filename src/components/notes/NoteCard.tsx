import React, { FC } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Tag } from "@prisma/client";

interface NoteCardProps {
	note: {
		id: string;
		title: string;
		content: string;
		tag: Tag;
	};
}

const NoteCard: FC<NoteCardProps> = ({ note }) => {
	const { id, title, content, tag } = note;

	return (
		<div className="max-w-lg">
			<Card>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardContent>
					<p>{content.slice(0, 30)}</p>
					<span className="badge">{tag.name}</span>
				</CardContent>
				<CardFooter>
					<Link href={`/blog/${id}`}>Read more...</Link>
				</CardFooter>
			</Card>
		</div>
	);
};
export default NoteCard;
