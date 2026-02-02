"use server"
import { getAllBlogs, deleteBlog } from "@/lib/api/admin/blog";

export const handleGetAllBlogs = async (
    page: number, size: number, search?: string
) => {
    try{
        const blogs = await getAllBlogs(page, size, search);
        if(blogs.success){
            return {
                blogs: blogs.data,
                pagination: blogs.pagination,
                success: true
            }
        }
        return {
            blogs: [],
            pagination: null,
            success: false,
            message: blogs.message || "Failed to fetch blogs"
        }
    }catch(error: Error | any){
        return {
            success: false,
            message: error.message || "An error occurred while fetching blogs"
        }
    }
}

export const handleDeleteBlog = async (id: string) => {
    try{
        const response =  await deleteBlog(id);
        if(response.success){
            return {
                success: true,
                message: "Blog deleted successfully"
            }
        }
        return {
            success: false,
            message: response.message || "Failed to delete blog"
        }
    }catch(error: Error | any){
        return {
            success: false,
            message: error.message || "An error occurred while deleting the blog"
        }
    }
}
