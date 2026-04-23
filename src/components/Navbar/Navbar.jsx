'use client'
import { Button } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

    const LogOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    alert(' Successfully Log Out! ')
                },
            },
        });
    }

    return (
        <div>
            <div className="flex justify-center items-center mt-5 gap-5">
                <Link href='/' className="flex justify-center my-3">
                    <Button className="bg-cyan-300"> Home </Button>
                </Link>

                <Link href='/auth/signup' className="flex justify-center my-3 ">
                    <Button className="bg-amber-400/60 text-black"> Sign Up </Button>
                </Link>

                <Link href='/auth/login' className="flex justify-center my-3">
                    <Button> Log In </Button>
                </Link>


                <Button onClick={LogOut} className="flex justify-center my-3 bg-red-400"> Log Out </Button>


                <h1 className="font-bold">Name:</h1>

            </div>
        </div>
    );
};

export default Navbar;