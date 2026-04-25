import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://authentication-app-with-better-auth-simanto-poddars-projects.vercel.app/"
})

export const { signIn, signUp, useSession } = createAuthClient()