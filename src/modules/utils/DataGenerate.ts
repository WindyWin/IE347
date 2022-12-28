import { faker } from "@faker-js/faker";

import blogRawData from "../../assets/data/blogs.json";
import productRawData from "../../assets/data/products.json";
import { comment, product } from "../../components/core/type";

export const commentGenerator = (num: number = 1): comment[] => {
    const commentList: comment[] = [];
    for (let i = 0; i < num; i++) {
        commentList.push({
            _id: faker.database.mongodbObjectId(),
            content: faker.lorem.paragraph(),
            rating: Math.floor(Math.random() * 5) + 1,
            user: faker.name.firstName(),
            date: faker.date.past().toISOString(),
            idProduct: faker.database.mongodbObjectId(),
            idBlog: faker.database.mongodbObjectId(),
        });
    }
    return commentList;
};

export const adminCommentGenerator = (num: number = 1): any[] => {
    const commentList: any = [];
    for (let i = 0; i < num; i++) {
        commentList.push({
            id: i,
            content: faker.lorem.paragraph(),
            rating: Math.floor(Math.random() * 5) + 1,
            user: faker.name.firstName(),
            date: faker.date.past().toISOString(),
            idProduct: faker.database.mongodbObjectId(),
            idBlog: faker.database.mongodbObjectId(),
        });
    }
    return commentList;
};

export const productData = productRawData.map(data => {

    return {
        _id: faker.database.mongodbObjectId(),
        name: data.name,
        description: data.description,
        stock: data.stock,
        price: data.price,
        salePrice: data.salePrice,
        variant: {
            size: data.variant?.size,
            color: data.variant?.color
        },
        images: data.images.map(image =>
        ({
            url: faker.image.imageUrl(640, 480, "cats")
        })),
        categories: data.categories,
        slug: data.slugName,
        content: data.content,
        rating: data.rating,
        comments: commentGenerator(5),
    }
})
export const blogData = blogRawData.map(data => {
    return {
        _id: faker.database.mongodbObjectId(),
        title: data.title,
        like: data.like,
        share: data.share,
        description: data.description,
        category: data.category,
        author: data.author,
        //convert $date to moment
        date: new Date(data.date["$date"]),
        image: {
            url: faker.image.imageUrl(),
        },
        content: data.content,
    }
})
export const petCategory = ["thucung",
    "chocanh",
    "meocanh",
    "thukieng",
    "hamster",
    "thucungkhac"];

export const storeCategory = ["thucanthucung",
    "tacho",
    "tameo",
    "takhac",
    "phukienthucung",
    "dochoithucung",
    "sanphamthuy"];




export const usersData = (length: number) => {
    const users: any[] = [];
    for (let i = 0; i < length; i++) {
        users.push({
            _id: faker.database.mongodbObjectId(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.imageUrl(),
            dateCreated: faker.date.past().toUTCString(),
            address: faker.address.streetAddress(),
        });
    }
    return users;
}
export const bookingData = (length: number) => {
    const booking: any[] = [];
    for (let i = 0; i < length; i++) {
        booking.push({
            id: faker.database.mongodbObjectId(),
            name: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.imageUrl(),
            dateCreated: faker.date.past().toISOString(),
            address: faker.address.streetAddress(),
        });
    }
    return booking;
}
