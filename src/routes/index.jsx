import { createBrowserRouter } from "react-router-dom";

import { Cart, Home, Login, Menu, Register } from "../containers";

import { Header, Footer } from "../components";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Home />
                <Footer />
            </>
        ),
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    }, {
        path: '/cardapio',
        element: (
            <>
                <Header />
                <Menu />
            </>
        ),
    },
    {
        path: '/carrinho',
        element: (
            <>
                <Header />
                <Cart />
            </>
        ),
    },

]);