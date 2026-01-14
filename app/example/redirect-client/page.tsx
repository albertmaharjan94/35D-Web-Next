"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // client side redirect
export default function Page() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const handleSubmit = () => {
        if(username == "admin"){
            router.push("/example/hook-example");
        }else{
            router.push("/example/state"); 
        }
    }
    return (
        <div className="mx-auto max-w-md p-4 m-2">
            <div className="mb-2">
                <label>Username</label>
                <input className="border p-2 rounded w-full"
                    onChange={ (e) => setUsername(e.target.value) } 
                    value={username} ></input>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded"
                onClick={handleSubmit} >
                Submit
            </button>
        </div>
    );
}