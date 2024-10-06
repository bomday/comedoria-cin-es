import connect from "@/lib/db";
import User from "@/lib/modals/customer";
import type { NextAuthOptions } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions  = {
    providers: [
      credentials({
        name: "Credentials",
        id: "credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
            await connect();
            const user = await User.findOne({
                email: credentials?.email,
            }).select("+password");
            
            if (!user) throw new Error("Email incorreto!");

            const passwordMatch = await bcrypt.compare(
                credentials!.password,
                user.password
            );

            if (!passwordMatch) throw new Error("Senha incorreta!");
            return user;
        },
      }),
    ],
    session: {
      strategy: "jwt",
    }
  };