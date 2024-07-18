import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {CredentialsSignin} from "next-auth";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export const {handlers:{GET,POST},signIn,signOut,auth} = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: any): Promise<any> {
        if(!credentials.email || !credentials.password){
          
          throw new CredentialsSignin("Please enter valid credentials");
        }
        await dbConnect();
        try {
          const user = await UserModel.findOne({
            email: credentials.email,
          });
          if (!user) {
            
            throw new CredentialsSignin("No user found");
          }
          if (!user.isVerified) {
            
            throw new CredentialsSignin("Please verify your email");
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          } else {
           
            throw new CredentialsSignin("Incorrect password");
          }
        } catch (error) {
          throw new CredentialsSignin("error");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token, user }) {
      if (token) {
        session.user.id = token.id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.isVerified = token.isVerified;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.isVerified = user.isVerified;
      }
      return token;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
});
