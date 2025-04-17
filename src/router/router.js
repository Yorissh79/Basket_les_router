import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Basket from "../components/basket/Basket";
import Home from "../components/home/Home";
import Wishlist from "../components/wishlist/Wishlist";
import NotFound from "../components/notfound/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/basket",
                Component: Basket
            },
            {
                path: "/wishlist",
                Component: Wishlist
            }
        ]
    },
    {
        path: "*",
        Component: NotFound
    }
])