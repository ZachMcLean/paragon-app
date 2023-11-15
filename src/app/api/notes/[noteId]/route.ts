import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface contextProps {
	params: {
		noteId: string;
	};
}

export async function DELETE(req: Request, context: contextProps) {
	try {
		// we dont need to return anything bc just deleting
		const { params } = context;
		await db.note.delete({
			where: {
				id: params.noteId,
			},
		});
		return new Response(null, { status: 204 });
	} catch (error) {
		return NextResponse.json(
			{ message: "could not delete note" },
			{ status: 500 }
		);
	}
}

export async function PATCH(req: Request, context: contextProps) {
	try {
		const { params } = context;
		const body = await req.json();

		await db.note.update({
			where: {
				id: params.noteId,
			},
			data: {
				title: body.title,
				content: body.content,
				tagId: body.tagId,
			},
		});
		return NextResponse.json({ message: "update success" }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "could not update note" },
			{ status: 500 }
		);
	}
}

// Get individual post to populate edit page

export async function GET(req: Request, context: contextProps) {
	try {
		const { params } = context;
		const note = await db.note.findFirst({
			where: {
				id: params.noteId,
			},
			include: {
				tag: true,
			},
		});
		return NextResponse.json(note, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "could not fetch tags" },
			{ status: 500 }
		);
	}
}
