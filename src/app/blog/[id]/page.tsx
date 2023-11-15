import BackButton from "@/components/notes/BackButton";
import ButtonAction from "@/components/notes/ButtonAction";
import { db } from "@/lib/db";
import React, { FC } from "react";

interface BlogPageProps {
	params: {
		id: string;
	};
}

// using server components
async function getNote(id: string) {
	const response = await db.note.findFirst({
		where: {
			id: id,
		},
		select: {
			id: true,
			title: true,
			content: true,
			tag: true,
		},
	});
	return response;
}

const BlogPage: FC<BlogPageProps> = async ({ params }) => {
	const post = await getNote(params.id);

	console.log(post);
	return (
		<div>
			<BackButton />
			<div className="mb-8">
				<h2 className="text-2xl font-bold my-4">{post?.title}</h2>
				<ButtonAction id={params.id} />
			</div>

			<span className="badge">{post?.tag.name}</span>
			<p className="text-slate-700">{post?.content}</p>
		</div>
	);
};

export default BlogPage;
