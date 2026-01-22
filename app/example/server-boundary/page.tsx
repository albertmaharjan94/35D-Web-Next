// "use client" yo garna painda
import { exampleAction } from "@/lib/actions/example-action";
import { notFound } from "next/navigation";

export default async function Page() {

    const result = await exampleAction();

    if(!result.success){
        throw new Error("Error")
    }

    if(!result.data){
        notFound();
    }

    return (
        <div>
            Loaded Page
        </div>
    );
}