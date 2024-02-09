import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import db from "@/lib/prismadb"


export const { 
    handlers: { GET, POST},
    auth,
    signIn,
    signOut
 } = NextAuth({
  //@ts-ignore
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})