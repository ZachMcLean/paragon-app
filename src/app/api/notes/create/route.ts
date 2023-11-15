import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const note = await db.note.create({
			data: {
				title: body.title,
				content: body.content,
				tagId: body.tagId,
			},
		});
		return NextResponse.json(note, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "could not create note" },
			{ status: 500 }
		);
	}
}
