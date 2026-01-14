"use client";
import { useState, useTransition } from "react";
import { loginAction } from "./actions/login";
export default function Page() {
    const [username, setUsername] = useState("");
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async () => {
        startTransition(async () => {
            const res = await loginAction(username);
            if (res?.error) {
                alert(`Login Failed: ${res.error}`);
            }
        });
        // isPending can be used to show loading state for function to complete
    }
    return (
        <div className="mx-auto max-w-md p-4 m-2">
            <div className="mb-2">
                <label>Username</label>
                <input className="border p-2 rounded w-full"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} ></input>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded disabled:bg-blue-300"
                disabled={isPending}
                onClick={handleSubmit} >
                { isPending ? "Loading..." : "Submit" }
            </button>
        </div>
    );
}

// Classroom Task
// create a new url-path for /example/orders
// /example/orders/success -> "Display Success"
// /example/orders/failure -> "Display Failure"
// /example/orders/unauthorized -> "Display Unathorized"
// on /example/orders
// input for "status", "price" with states
// make 2 button apply and next
// on "apply" button
// use client side redirect to check if price is below 0
// if below redirect to /example/orders/failure
// on "next" button
// use server side redirect to check if status is "active", "inactivate"
// if active - redirect to "/example/orders/success"
// if inactive - redirect to "/example/orders/unauthorized"
// if empty or not "active/inactive" - Alert "Error message"
// make use of useTransition in every "redirection"