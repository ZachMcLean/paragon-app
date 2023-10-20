"use client";
import { useSession } from "next-auth/react";

// The purpose of this component is to get the User from the session
// it is imported by the admin page

const User = () => {
	const { data: session } = useSession();

	return <pre>{JSON.stringify(session)}</pre>;
};

export default User;
