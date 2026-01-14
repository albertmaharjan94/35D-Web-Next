"use server";
import { redirect } from "next/navigation";

export async function loginAction(username: string){
    if(!username){
        return { error: "Username is required" };
    }
    await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate delay/api
    if(username === "admin"){
        redirect("/example/hook-example");
    }else{
        redirect("/example/state");
    }
}