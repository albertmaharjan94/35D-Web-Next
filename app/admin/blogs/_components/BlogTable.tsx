"use client"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { handleDeleteBlog } from "@/lib/actions/admin/blog-action";
import DeleteModal from "@/app/_components/DeleteModal";
export default function BlogTable(
    { blogs, pagination, search } : { blogs: any[], pagination: any, search?: string }
) {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState(search || "");
    const handleSearchChange = (e: any) => {
        router.push(`/admin/blogs?search=${searchTerm}`);
    };

    const [deleteId, setDeleteId] = useState(null);

    const onnDelete = async () => {
        // Implement delete logic here, e.g., call an API to delete the blog
        try{
            await handleDeleteBlog(deleteId!);
            toast.success("Blog deleted successfully");
        }catch(err: Error | any){
            toast.error(err.message || "Failed to delete blog");
        }finally{
            setDeleteId(null);
        }
    }
    return (
        <div>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Search blogs..." 
                className="input input-bordered w-full max-w-xs mb-4"
            />
            <button className="btn btn-primary mb-4" onClick={handleSearchChange}>
                Search
            </button>
             <DeleteModal
                isOpen={deleteId}
                onClose={() => setDeleteId(null)}
                onConfirm={onnDelete}
                title="Delete Confirmation"
                description="Are you sure you want to delete this item? This action cannot be undone."
            />
            <table className="table p-2 border">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog._id}>
                            <td>{blog._id}</td>
                            <td>{blog.title}</td>
                            <td>
                                <Link href={`/admin/blogs/edit/${blog._id}`} className="btn btn-sm btn-primary mr-2">Edit</Link>
                                <button className="btn btn-sm btn-danger" onClick={() => setDeleteId(blog._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                {pagination && (
                    <>
                        {pagination.page > 1 && (
                            <Link
                                href={`/admin/blogs?page=${pagination.page - 1}&size=${pagination.size}&search=${search ?? ""}`}
                            >
                                Previous
                            </Link>
                        )}
                        <span> Page {pagination.page} of {pagination.totalPages} </span>
                        {pagination.page < pagination.totalPages && (
                            <Link
                                href={`/admin/blogs?page=${pagination.page + 1}&size=${pagination.size}&search=${search ?? ""}`}
                            >
                                Next
                            </Link>
                        )}
                    </>
                )}
            </div>

        </div>
    );
}