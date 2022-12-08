import { faker } from "@faker-js/faker";

import { product } from "../../components/core/type";



export const generateCategory = (categoryList: string[] = [
    "Chó cảnh",
    "Mèo cảnh",
    "Chim cảnh",
    "Thú cưng khác",

], lenght: number = 1) => {
    const category: string[] = [];
    for (let i = 0; i < lenght; i++) {
        if (categoryList.length === 0) break;
        category.push(categoryList.splice(Math.floor(Math.random() * categoryList.length), 1)[0]);
    }
    return category;
}

//generate fake data
export const generateProductList = (num: number): product[] => {
    const fakeData: product[] = [];
    for (let i = 0; i < num; i++) {
        fakeData.push(
            {
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                stock: faker.datatype.number(),
                comments: [],
                price: faker.datatype.number(),
                salePrice: faker.datatype.number(),
                variant: {
                    size: ["S", "M", "L", "XL"],
                    color: ["red", "blue", "green", "yellow"],
                },
                images: [
                    {
                        url: faker.image.imageUrl(),
                        title: faker.commerce.productName(),
                    }
                ],
                _id: faker.database.mongodbObjectId(),
                categories: generateCategory(),
            })
    }
    return fakeData;

}



