import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(db),
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: "jwt",
	},
	// This is where we specify using our custom form PAGE
	// instead of the default nextAuth CredentialsProvider form PAGE
	pages: {
		signIn: "/sign-in",
	},

	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: "Credentials",
			// `credentials` is used to generate a form on the sign in page.
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				email: {
					label: "email",
					type: "email",
					placeholder: "john@mail.com",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				// Add logic here to look up the user from the credentials supplied
				/* Example: const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }; */

				// check if credentials are valid
				if (!credentials?.email || !credentials?.password) {
					return null;
				}
				// check for unique email
				const existingUser = await db.user.findUnique({
					where: { email: credentials?.email },
				});
				if (!existingUser) {
					return null;
				}

				// compare the credentials password to the
				// password in db
				const passwordMatch = await compare(
					credentials.password,
					existingUser.password
				);

				if (!passwordMatch) {
					return null;
				}
				return {
					id: `{existingUser.id}`,
					username: existingUser.username,
					email: existingUser.email,
				};
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			console.log(token, user);

			if (user) {
				return {
					...token,
					username: user.username,
				};
			}
			return token;
		},
		async session({ session, token }) {
			return {
				...session,
				user: {
					...session.user,
					username: token.username,
				},
			};
			return session;
		},
	},
};
