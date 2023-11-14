import React from "react";
import Link from "next/link";
import { Pencil, Trash } from "lucide-react";

const ButtonAction = () => {
	return (
		<div>
			<Link href="/edit-note/id" className="btn mr-2">
				<Pencil /> Edit
			</Link>
			<button className="btn btn-error">
				<Trash /> Delete
			</button>
		</div>
	);
};

export default ButtonAction;
