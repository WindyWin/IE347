import { isBuffer } from "util";
import { product, productDetail } from "../components/core/type";
import { productData } from "../modules/utils/DataGenerate";
import toSlug from "../modules/utils/toSlug";

export const getProductDetail = (slug: string): productDetail | null => {

    const product = productData.find(e => e.slug === slug);
    if (!product) return null;
    return {
        _id: product?._id || "",
        name: product?.name || "",
        price: product?.price || 0,
        stock: product?.stock || 0,
        salePrice: product?.salePrice || undefined,
        description: product?.description || "",
        content: product?.content || "",
        variant: product?.variant,
        images: product?.images || [{ url: "" }],
        categories: product?.categories || [""],
        comments: product?.comments || [],
    };
}

export const getAllProduct = (): any[] => {
    const productList: product[] = productData.map(
        product => ({
            _id: product._id,
            name: product.name,
            description: product.description,
            stock: product.stock,
            price: product.price,
            salePrice: product.salePrice,
            variant: product.variant,
            images: product.images,
            categories: product.categories,
            comments: product.comments,
        }));
    return productList;

}
export const getProductListByCategory = (category: string): product[] => {
    const productList = productData
        .filter(product => product.categories.includes(category))
        .map(
            product => ({
                _id: product._id,
                name: product.name,
                description: product.description,
                stock: product.stock,
                price: product.price,
                salePrice: product.salePrice,
                variant: product.variant,
                images: product.images,
                categories: product.categories,
                comments: product.comments,
            })

        );
    return productList;
}

export const getProductByKeyword = (keyword: string): product[] | null => {

    const productList = productData
        .filter(product =>
            toSlug(product.name.toLowerCase()).includes(keyword.toLowerCase())
            || toSlug(product.description.toLowerCase()).includes(keyword.toLowerCase()))
        .map(
            product => ({
                _id: product._id,
                name: product.name,
                description: product.description,
                stock: product.stock,
                price: product.price,
                salePrice: product.salePrice,
                variant: product.variant,
                images: product.images,
                categories: product.categories,
                comments: product.comments,
            })

        );

    return productList.length > 0 ? productList : null;
}
