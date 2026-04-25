import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://authentication-app-with-better-auth.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()