import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "authentication-app-with-bet-git-c70644-simanto-poddars-projects.vercel.app"
    // baseURL: "http://localhost:3000"
})

export const { signIn, signUp, useSession } = createAuthClient()