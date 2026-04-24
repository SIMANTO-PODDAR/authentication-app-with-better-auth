"use client"
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const {
    data: session
  } = authClient.useSession()

  const userName = session?.user.name.toUpperCase();

  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-3"
      >Welcome {userName}!</h1>
      <h1 className="font-bold text-2xl text-center mt-3"
      ></h1>
    </div>
  );
}
