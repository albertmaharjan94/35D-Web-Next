import { useState, ChangeEvent } from "react";

// A custom hook to manage login form state
// "use" prefix is mandatory for custom hooks
// no need to "use client", it is only logic not UI
export const useLoginForm = () => {
    // States and functions
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    const handleSubmit = () => {
        const data = {
            "username": username,
            "password": password
        }
        // api call with data ... 
        alert("Username: " + username);
    }
    // return object with states and functions
    return {
        username, password, // states and variable
        setUsername, setPassword, // state update functions
        handleUsername, handlePassword, handleSubmit // event handlers
    }
}