import { handleGetAllBlogs } from "@/lib/actions/admin/blog-action";
import BlogTable from "./_components/BlogTable";
export default async function Page({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const page = params.page ? parseInt(params.page as string, 10) : 1;
    const size = params.size ? parseInt(params.size as string, 10) : 10;
    const search = params.search ? (params.search as string) : undefined;

    const result = await handleGetAllBlogs(page, size, search);
    if(!result.success){
        throw new Error(result.message || "Failed to load blogs");
    }
    if(!result.blogs || !result.pagination){
        throw new Error("No blogs found");
    }
    return (
        <div>
            <BlogTable blogs={result.blogs} pagination={result.pagination} search={search} />
        </div>
    );
}