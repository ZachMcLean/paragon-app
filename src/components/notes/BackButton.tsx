"use client";
import { ChevronLast } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
	const router = useRouter();

	return (
		<button className="btn" onClick={() => router.back()}>
			<ChevronLast />
			Back
		</button>
	);
};

export default BackButton;
