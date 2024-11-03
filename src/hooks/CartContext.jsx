import { useContext, createContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    // Atualiza o localStorage com os produtos do carrinho
    const updateLocalStorage = (products) => {
        localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
    };

    // Carrega os produtos do carrinho do localStorage ao montar o componente
    useEffect(() => {
        const clientCartData = localStorage.getItem('devburger:cartInfo');
        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }
    }, []);

    // Adicionar item ao carrinho
    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
        let newProductInCart;

        if (cartIndex >= 0) {
            newProductInCart = [...cartProducts]; // Cria uma nova referência do array
            newProductInCart[cartIndex].quantity += 1; // Aumenta a quantidade do produto
        } else {
            product.quantity = 1; // Define a quantidade inicial
            newProductInCart = [...cartProducts, product]; // Adiciona novo produto
        }

        setCartProducts(newProductInCart);
        updateLocalStorage(newProductInCart);
    };

    // Limpar o carrinho após a compra
    const clearCart = () => {
        setCartProducts([]);
        updateLocalStorage([]);
    };

    // Apagar itens do carrinho
    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId);

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    // Aumentar a quantidade de um produto no carrinho
    const increaseProduct = (productId) => {
        const newCart = cartProducts.map(prd => 
            prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
        );
        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    // Diminuir a quantidade de um produto no carrinho
    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

        if (cartIndex >= 0 && cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(prd => 
                prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
            );
            setCartProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            deleteProduct(productId); // Remove o produto se a quantidade for 1
        }
    };

    return (
        <CartContext.Provider value={{
            cartProducts,
            putProductInCart,
            clearCart,
            decreaseProduct,
            increaseProduct,
            deleteProduct,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart deve ser usado como um Contexto');
    }
    return context;
};
