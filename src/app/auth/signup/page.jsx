"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BarLoader } from "react-spinners";
import { toast } from "react-toastify";


const SignUpPage = () => {

    const [loading, setLoading] = useState(false);

    const router = useRouter()

    const onSubmit = async (e) => {
        setLoading(true);

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
        },
            {
                onSuccess: () => {
                    toast.success(' Successfully Sign Up')
                    router.push('/profile')
                }
            }
        );

        if (!data) {
            toast.warning(error.message)
        }

        setLoading(false);
    };

    return (
        <div className=" mt-5">
            <h1 className='text-2xl text-center font-bold'>Sign Up:</h1>

            <div className={`${!loading ? 'flex justify-center' : 'hidden'}`}>

                <Form className="flex w-96 flex-col gap-4 mt-5" onSubmit={onSubmit}>

                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input name="name" placeholder="Your Name" autoComplete="name" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input name="email" placeholder="Your Email" autoComplete="email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input name="password" placeholder="Enter your password" autoComplete="current-password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit">
                            <Check />
                            Sign Up
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>

            <div className={`${loading ? 'grid justify-center text-2xl text-center font-bold mt-5' : 'hidden'}`}>
                <h1>Processing Your Request</h1>
                <BarLoader className="mt-3 w-full" />
            </div>
        </div>
    );
};

export default SignUpPage;