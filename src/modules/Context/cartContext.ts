import { createContext } from "react";

const cartContext = createContext<any>(JSON.parse(
    window.localStorage.getItem("products") as string
) ?? [])
export default cartContext;