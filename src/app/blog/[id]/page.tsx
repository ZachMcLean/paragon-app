import BackButton from "@/components/notes/BackButton";
import ButtonAction from "@/components/notes/ButtonAction";
import React from "react";

const BlogPage = () => {
	return (
		<div>
			<BackButton />
			<div className="mb-8">
				<h2 className="text-2xl font-bold my-4">Post One</h2>
				<ButtonAction />
			</div>
			<p className="text-slate-700">Post one Content</p>
		</div>
	);
};

export default BlogPage;
