import { blog, blogCard } from "../components/core/type";
import { blogData } from "../modules/utils/DataGenerate";
import toSlug from "../modules/utils/toSlug";

export const getBlogCategories = (): string[] => {
    let categories: string[] = [];
    blogData.forEach((blog) => {
        if (!categories.includes(blog.category))
            categories.push(blog.category)
    })
    return categories;
}
export const getBlogbyCategory = (category: string): blogCard[] => {
    return blogData.filter(blog => blog.category === category)
        .map((blog): blogCard => {
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
        })
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
export const getBlogBySlugName = (slugName: string): blog => {
    const blog = blogData.find((blog) => toSlug(blog.title) === slugName);
    if (!blog)
        return blogData[0]
    return blog
    // {
    //     _id: blog._id,
    //     title: blog.title,
    //     like: ["", ""],
    //     share: 3,
    //     description: blog.description,
    //     category: blog.category,
    //     author: blog.author,
    //     date: blog.date,
    //     image: blog.image,
    //     content: blog.content,
    // };
}