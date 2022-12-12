import { product, productDetail } from "../components/core/type";
import { productData } from "../modules/utils/DataGenerate";

export const getProductDetail = (slug: string): productDetail => {
    const product = productData.find(product => product.slug === slug);
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