'use client'
import { Button } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { BounceLoader } from "react-spinners";
import { toast } from "react-toastify";

const Navbar = () => {

    const {
        data: session
    } = authClient.useSession()

    const userName = session?.user.name.toUpperCase();

    const LogOut = async () => {
        if (userName == true) {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        toast.success(' Successfully Log Out!');
                    },
                },
            });
        }
        else {
            toast('Log In First!');
        }

    }

    return (
        <div>
            <div className="flex justify-center items-center gap-5 scale-70 sm:scale-100">
                <Link href='/' className="flex justify-center my-3">
                    <Button className="bg-cyan-300"> Home </Button>
                </Link>

                <Link href='/auth/signup' className="flex justify-center my-3 ">
                    <Button className="bg-amber-400/60 "> Sign Up </Button>
                </Link>

                <Link href='/auth/login' className="flex justify-center my-3">
                    <Button> Log In </Button>
                </Link>

                <Button onClick={LogOut} className="flex justify-center my-3 bg-red-400"> Log Out </Button>

                <Link href='/profile' className="font-bold flex items-center ">
                    <Button className='bg-green-800 max-w-35'>
                        <span>Profile:</span>
                        <span className="text-xs"> {userName ? userName : <Loader />} </span>
                    </Button>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;

const Loader = () => {
    return (
        <div>
            <BounceLoader
                color="#0485f7"
                size={20}
            />
        </div>
    );
};