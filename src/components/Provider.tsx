"use client";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/system";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// the main point of this component is to wrap the body in a SessionProvider
// The SessionProvider gives us access to the session in the client
// however to do this we need to have a client component,
// so best practice is to wrap a client component and wrap the contents inside the <body/> of layout.ts

interface ProviderProps {
	children: ReactNode;
}

const queryClient = new QueryClient();
const Provider: FC<ProviderProps> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<SessionProvider>{children}</SessionProvider>
		</QueryClientProvider>
	);
};

export default Provider;
