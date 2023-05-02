import React, { useState, createContext } from "react";

interface State {
    items: Array<any>;
    user: any | null;
}

interface Item {
    productId: string;
}

interface AppContextProps {
    state: State;
    addItemToCart: (item: Item) => void;
    removeItemFromCart: (itemId: string) => void;
    login: (user: any) => void;
    logout: () => void;
    cart: Array<Item>;
    setCart: (cart: Array<Item>) => void;
    setProduct: (product: Array<any>) => void;
    IrAoItem: (item: any) => void;
    Product: Array<any>;
    NovoItem: () => void;
    clearCart: () => void;
}

export const AppContext = createContext<AppContextProps>({
    state: { items: [], user: null },
    addItemToCart: (item: Item) => { },
    removeItemFromCart: (itemId: string) => { },
    login: (user: any) => { },
    logout: () => { },
    cart: [],
    setCart: (cart: Array<Item>) => { },
    setProduct: (product: Array<any>) => { },
    IrAoItem: (item: any) => { },
    Product: [],
    NovoItem: () => { },
    clearCart: () => { },
});

function AppProvider(props: any) {
    const [state, setState] = useState<State>({ items: [], user: null });

    const [cart, setCart] = useState<Array<Item>>([]);

    const [Product, setProduct] = useState<Array<any>>([]);

    const addItemToCart = (item: Item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const IrAoItem = (item: any) => {
        setProduct((prevProduct) => [...prevProduct, item]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const NovoItem = () => {
        setProduct([]);
    };

    const removeItemFromCart = (itemId: string) => {
        setCart((prevCart) =>
            prevCart.filter((item) => 
                item.productId !== itemId
            )
        );
        console.log(cart[0],itemId)
    };

    const clearCart = () => {
        setCart([]);
    };

    const login = (user: any) => {
        setState((prevState) => ({ ...prevState, user }));
    };

    const logout = () => {
        setState((prevState) => ({ ...prevState, user: null }));
    };

    return (
        <AppContext.Provider
            value={{
                state,
                addItemToCart,
                removeItemFromCart,
                login,
                logout,
                cart,
                setCart,
                setProduct,
                IrAoItem,
                Product,
                NovoItem,
                clearCart,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;