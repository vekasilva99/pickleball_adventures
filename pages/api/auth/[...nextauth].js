import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/backend/models/user.model";
import bcrypt from "bcryptjs";
import dbConnect from "@/backend/config/dbConnect";

export default async function auth(req, res) {
  return await NextAuth(req, res, {
    session: {
      strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
        async authorize(credentials, req) {
          dbConnect();
          const { email, password } = credentials;

          const user = await User.findOne({ email }).select("+password");

          if (!user) {
            throw new Error("Invalid Email or Password");
          }

         
          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );

          if (!isPasswordMatched) {
            throw new Error("Invalid Email or Password");
          }

          console.log('userrrrr',user)
          return user;

      

        },
      }),
    ],
    callbacks: {
      jwt: async ({ token, user }) => {
        user && (token.user = user);

        return token;
      },
      session: async ({ session, token }) => {
        session.user = token.user;

        // delete password from session
        delete session?.user?.password;

        return session;
      },
    },

    pages: {
      signIn: "/sign-in",
    },
    secret: process.env.NEXTAUTH_SECRET,
  });
}