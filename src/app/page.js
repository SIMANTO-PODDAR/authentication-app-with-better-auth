import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center mt-5">

      <Button><Link className="" href='auth/signup'>Sign Up</Link></Button>
    </div>
  );
}
