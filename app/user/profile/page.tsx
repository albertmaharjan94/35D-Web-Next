
import { handleWhoAmI } from "@/lib/actions/auth-action";
import { notFound } from "next/navigation";
import UpdateForm from "./_components/UpdateForm";

export default async function Page() {
    const result = await handleWhoAmI();

    if(!result.success){
        throw new Error("Error fetching user data");
    }
    
    if(!result.data){
        notFound();
    }
    
    return (
        <div>
            <UpdateForm user={result.data} />
        </div>
    );
}