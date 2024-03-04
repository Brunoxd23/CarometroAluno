

import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google";
import { Adapter } from "next-auth/adapters";


import { db } from "@/app/_lib/db"


export const authOptions : NextAuthOptions = {
    adapter: PrismaAdapter (db) as Adapter,
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          }),
        CredentialProvider({
            name: "credentials",
            credentials: {
                email: {label: "Email", type: "text", placeholder: "jsmith"},
                password: {label: "Password", type: "password"},
                name: {label: "Name", type: "text", placeholder: "John Smith"},
            },
            async authorize(credentials, req) : Promise<any>{
                const user = {email: 'teste@test01.com', password: "123456", name: "Teste01"}

                return user
            }
        })
    ],
    session: {
        strategy: "jwt"
    },

    secret: process.env.SECRET,
    debug: process.env.NODE_ENV === "development",
}