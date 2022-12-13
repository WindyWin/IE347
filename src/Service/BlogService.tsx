import { blog, blogCard } from "../components/core/type";
import { blogData } from "../modules/utils/DataGenerate";

export const getBlogCategories = (): string[] => {
    let categories: string[] = [];
    blogData.forEach((blog) => {
        if (!categories.includes(blog.category))
            categories.push(blog.category)
    })
    return categories;
}

export const getAllBlogs = (): blogCard[] => {
    return blogData.map((blog): blogCard => {
        return {
            title: blog.title,
            like: blog.like,
            comments: ["", "", ""],
            share: blog.share,
            description: blog.description,
            category: blog.category,
            image: blog.image,
            _id: blog._id,
            author: blog.author,
            date: blog.date,
        }
    }
    )
}