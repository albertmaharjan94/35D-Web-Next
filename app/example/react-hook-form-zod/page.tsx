"use client";
import { useForm } from "react-hook-form";

import z from "zod"; // import zod
import { zodResolver } from "@hookform/resolvers/zod"; // import zod resolver
import { loginSchema, LoginType } from "./schema"; // import schema and type

// any resources in "app" folder should be imported
import image2 from "@/app/assets/images/image2.jpg";
// next js image, auto optimized, cache, lazy load
import Image from "next/image"; 


// export const loginSchema = z.object({
//     email: z.email( {message: "Email milena"} ),
//     password: z.string().min(6, { message: "Password pugena" } )
// });
// export type LoginType = z.infer<typeof loginSchema>;

export default function Page() {
    const { 
        register, // bind input to state
        handleSubmit, // handle form submission
        formState: { errors, isSubmitting } // form state
    } = useForm<LoginType>(
        { 
            resolver: zodResolver(loginSchema), // use zod resolver
            values: { email: "", password: "" } 
        } // input state and initial
    );
    const onSubmit = async (data: LoginType) => {
        alert(data.email);
    }
    return (
        <div>

            {/* height/width is optional in imported image */}
            <Image src={image2} alt="Image 2" width={200} height={200} />
            {/* height/width is required in public image, public omitted in path */}
            <Image src="/images/image1.jpg" alt="Image 1" width={200} height={200} />
            
            <form className="mx-auto max-w-md p-2 border" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                    <label>Email</label>
                    <input  { ...register("email") } 
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

// Classroom Task
// create new url-path for /example/react-hook-form-register
// on that page create a form with inputs 
// "firstName", "lastName, "age", "email", "password", "confirmPassword"
// use react-hook-form to manage the form state
// use zod to create a schema for the form with the following validations
// firstName, lastName - required, min length 2
// age - required, number, min 18
// email - required, valid email
// password - required, min length 6
// confirmPassword - required, min length 6
// on form submission, alert "Success" if all validations pass
const schemaExample = z.object({
    password: z.string().min(6, { message: "Password pugena"} ),
    confirmPassword: z.string().min(6, { message: "Confirm Password pugena"} )
}).refine( // extra validation for matching passwords
    (data) => data.password === data.confirmPassword, 
    {
        message: "Passwords do not match", path: ["confirmPassword"]
    }
);