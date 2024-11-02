import { useContext, createContext, useEffect, useState } from "react";


const CartContext = createContext({})


export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])

    //Adicionar item ao carinho
    const putProductInCart = (product) => {


    }

    //Limpar o carrinho apos a compra
    const clearCart = () => {

    }

    //Apagar itens do Carinho
    const deletProduct = (product) => {

    }

    //Remover itens do carrinho
    const increaseProduct = (productId) => {

    }

    //Adicionar mais itens ao Carrinho
    const decreaseProduct = (productId) => {

    }

    return (
        <CartContext.Provider value={{
            cartProducts,
            putProductInCart,
            clearCart,
            decreaseProduct,
            increaseProduct
        }}
        >
            {children}
        </CartContext.Provider>

    )
}

export const UseCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart deve ser usado como um Contexto')
    }
    return Context
}