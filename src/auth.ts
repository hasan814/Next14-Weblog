
import { connectDB } from "./lib/connectDB"

import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import User from "./model/UserModel"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === 'github') {
                connectDB()
                try {
                    const user = await User.findOne({ email: profile.email })
                    if (!user) {
                        const newUser = new User({ username: profile.login, email: profile.email, image: profile.avatar_url })
                        await newUser.save()
                    }
                } catch (error) {
                    console.log(error)
                    return false
                }
            }
            return true
        }
    }
})