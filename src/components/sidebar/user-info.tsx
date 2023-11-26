import React, { FC } from "react";
import { useSession } from "next-auth/react";

interface UserInfoProps {
	open: boolean;
}

const UserInfo: FC<UserInfoProps> = ({ open }) => {
	const { data: session } = useSession();

	if (session?.user) {
		return (
			<div className={`${!open ? "hidden" : ""} leading-5`}>
				<h4 className="font-semibold">{session?.user.username}</h4>
				<span className="text-xs text-gray-600">{session?.user.email}</span>
			</div>
		);
	}
	return (
		<div className={`${!open ? "hidden" : ""} leading-5`}>
			<h4 className="font-semibold">John Doe</h4>
			<span className="text-xs text-gray-600">johndoe@gmail.com</span>
		</div>
	);
};

export default UserInfo;

// export async function getServerSideProps(context) {
// 	console.log();
// 	const session = await getServerSession(context.req, context.res, authOptions);

// 	return {
// 		props: {
// 			session,
// 		},
// 	};
// }
