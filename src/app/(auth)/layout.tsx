import { FC, ReactNode } from "react";

interface AuthLayoutProps {
	children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
	return (
		<section className="h-screen flex flex-col justify-center items-center">
			<div className="bg-slate-200 p-10 rounded-md">{children}</div>
		</section>
	);
};

export default AuthLayout;
