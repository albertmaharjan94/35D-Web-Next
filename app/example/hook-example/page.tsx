"use client";
import { useState, ChangeEvent} from "react";
import { useLoginForm } from "./hooks/use-login-form";
export default function Page() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    //     setUsername(e.target.value);
    // }
    // 1. entire object, eg: form.password
    // const form = useLoginForm(); 
    // 2. destructuring, only needed states and functions
    const { username, handleUsername, handleSubmit } = useLoginForm(); 
    // Destructure: converts object properties into variables
    // Task:
    // Using destructure, complete the form and fix the current errors
    return (
        <div className="mx-auto max-w-md my-2 p-3 border rounded">
            <div className="m-2">
                <label>Username</label>
                <input 
                    className="p-2 border rounded"
                    onChange={handleUsername} value={username} ></input>
            </div>
            {/* ... passsword */}
            <button onClick={ handleSubmit } 
                className="p-2 bg-red-400 text-white" >
                Test
            </button>
        </div>
    );
}


// under hook example, create a new page "register"
// /example/hook-example/register
// create a components on /example/hook-example/_component/register-form.tsx
// create just form design and hook implementation
// create a custom hook on /example/hook-example/hooks/use-register-form.ts
// hooks should contain states for
// firstname, lastname, email, username, password, confirm password
// handleFirstName, handleLastName, handleEmail, handleUsername, 
// handlePassword, handleConfirmPassword
// handleSubmit function to:
//  - validate if fields are empty: Alert All fields are required
//  - validate if password and confirm password are same: Alert Passwords do not match
//  - if all validations pass: Alert Registration Successful for <username>
// return only what is needed from the custom hook, skip exporting setter functions
// use this custom hook in register-form component
// IMPORTANT: hooks/custom hooks import should be client components
// use the register-form in register page