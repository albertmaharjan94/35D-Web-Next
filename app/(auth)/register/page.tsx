"use client";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { handleRegister } from "@/lib/actions/auth-action";
export const registerSchema = z.object(
    {
        email: z.email({ message: "Email milena" }),
        username: z.string().min(3, { message: "Username pugena" }),
        firstName: z.string().min(1, { message: "First Name pugena" }),
        lastName: z.string().min(1, { message: "Last Name pugena" }),
        confirmPassword: z.string().min(6, { message: "Confirm Password pugena" }),
        password: z.string().min(6, { message: "Password pugena" })
    }
).refine((data) => data.password === data.confirmPassword,
    {
        message: "Passwords do not match",
    }
);

export type RegisterForm = z.infer<typeof registerSchema>;

export default function Page() {
    const router = useRouter();
    const [pending, setTransition] = useTransition()
    const { register, handleSubmit, formState: { errors, isSubmitting } }
        = useForm<RegisterForm>(
            {
                resolver: zodResolver(registerSchema),
            }
        )
    const [error, setError] = useState("")
    const onSubmit = async (data: RegisterForm) => {
        // call action here
        setError("");
        try {
            const result = await handleRegister(data);
            if (!result.success) {
                throw new Error(result.message);
            }
            setTransition(() => {
                router.push("/login");
            });
        } catch (e: Error | any) {
            setError(e.message);
        }
    }

    return (
        <div>
            {error && <div className="text-red-500">{error}</div>}
            <form onSubmit={handleSubmit(onSubmit)}
                className="mx-auto p-2 max-w-xl border">
                <div className="mt-2">
                    <label>Email</label>
                    <input {...register("email")} className="border" />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>

                <div className="mt-2">
                    <label>Username</label>
                    <input {...register("username")} className="border" />
                    {errors.username && <span className="text-red-500">{errors.username.message}</span>}
                </div>

                <div className="mt-2">
                    <label>First Name</label>
                    <input {...register("firstName")} className="border" />
                    {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
                </div>

                <div className="mt-2">
                    <label>Last Name</label>
                    <input {...register("lastName")} className="border" />
                    {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
                </div>

                <div className="mt-2">
                    <label>Password</label>
                    <input type="password" {...register("password")} className="border" />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                </div>

                <div className="mt-2">
                    <label>Confirm Password</label>
                    <input type="password" {...register("confirmPassword")} className="border" />
                    {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                </div>

                <button type="submit" className="p-2 bg-green-500 mt-4">Submit</button>
            </form>
        </div>
    );
}