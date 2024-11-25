import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth"
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


const handler = NextAuth({
    secret:process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) {
                    return null
                }
                const db = await connectDB();
                const currentUser = await db.collection("users").findOne({ email });
                if (!currentUser) {
                    return null
                }
                const passwordMatched = bcrypt.compareSync(password, currentUser.password);
                if (!passwordMatched) {
                    return null
                }
                return currentUser;
            }
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === 'google' || account.provider === 'github') {
                const { name, email, image } = user; // Destructure the user object

                try {
                    // Connect to your MongoDB database
                    const db = await connectDB();
                    const userCollection = db.collection("users");

                    // Check if the user already exists in the database
                    const userExist = await userCollection.findOne({ email });

                    // If the user does not exist, insert the user into the database
                    if (!userExist) {
                        await userCollection.insertOne({
                            name,
                            email,
                            image,
                            createdAt: new Date(), // Optionally add a createdAt field
                        });
                    }

                    // Return true to indicate successful sign-in
                    return true;
                } catch (error) {
                    console.error('Error during sign-in:', error);
                    // Return false to indicate that sign-in failed
                    return false;
                }
            } else {
                // For other providers, simply return true to continue the sign-in process
                return true;
            }
        }
    }

})
export { handler as GET, handler as POST }