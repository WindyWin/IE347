import { useContext } from "react";
import cartContext from "../Context/cartContext";
// import { message } from "antd";


const useCart = () => {
    let cart = useContext(cartContext);

    return {

        getCart: cart,
        addToCart: (product: any) => {
            if (!!cart.find((item: any) => item._id === product._id)) {
                return;
            }
            cart.push(product);

            window.localStorage.setItem("products", JSON.stringify(cart));
        },
        removeFromCart: (product: any) => {
            const index = cart.findIndex((item: any) => item._id === product._id);
            if (index === -1) {
                return;
            }
            cart.splice(index, 1);
            window.localStorage.setItem("products", JSON.stringify(cart));
        },
        getCartLength: (): number => {
            return cart.length;
        },
        updateQuantity: (product: any, quantity: number) => {
            if (quantity >= 0) {
                let index = cart.findIndex((item: any) => item._id === product._id);
                cart[index].quantity = quantity;
                window.localStorage.setItem("products", JSON.stringify(cart));
                return;

            }

            cart = cart.filter((item: any) => item._id !== product._id);
            window.localStorage.setItem("products", JSON.stringify(cart));
        },
    }
}


export default useCart;