"use client";
import React, { useState } from "react";
// Shadcn Popover
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

const RoutinePage = () => {
	// Popover
	const [open, onOpenChange] = useState(false);
	const [] = useState(true);

	return (
		<section className="h-full">
			<Popover open={open} onOpenChange={onOpenChange}>
				<PopoverTrigger asChild>
					{}
					{/* <Button variant="outline">Open popover</Button> */}
				</PopoverTrigger>
				<PopoverContent className="w-80">
					<div className="flex w-full max-w-sm items-center space-x-2">
						<Input
							type="text"
							// value={value}
							// onValueChange={setValue}
							placeholder="Input Text Here:"
						/>
						<Button
							// onSubmit={() => handleAction()}
							type="submit"
							variant="default"
						>
							Submit
						</Button>
					</div>
				</PopoverContent>
			</Popover>
		</section>
	);
};

export default RoutinePage;
