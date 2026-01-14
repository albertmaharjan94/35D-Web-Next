"use client";
import { useForm } from "react-hook-form";
export default function Page() {
    const { 
        register, // bind input to state
        handleSubmit, // handle form submission
        formState: { errors, isSubmitting } // form state
    } = useForm(
        { values: { email: "", password: "" } } // input state and initial
    );
    const onSubmit = async (data: any) => {
        alert(data.email);
    }
    return (
        <div>
            <form className="mx-auto max-w-md p-2 border" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                    <label>Email</label>
                    <input  { ...register("email", { required: "Email is required" } ) } 
                        className="border p-2 rounded w-full" />
                    { 
                        errors.email && // conditional render
                        <p className="text-red-500">{ errors.email.message }</p>
                    }
                </div>
                <button className="p-2 rounded" disabled={isSubmitting}>Submit</button>
            </form>
        </div>
    );
}