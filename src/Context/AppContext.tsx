import React, { useState, createContext } from "react";

interface State {
    items: Array<any>;
    user: any | null;
}

interface Item {
    productId: any;
    productName: string;
    productBrand: string;
    productDescription: string;
    imageProduct: string;
    thumbnail: string[];
    ListPrice: number;
    Price: number;
    quantidade: number;
    installmentOptionsCount: number;
}

interface AppContextProps {
    state: State;
    addItemToCart: (item: Item) => void;
    atualizarCart: (productId: number, newQuantity: number) => void;
    addFav: (item: Item) => void;
    removeItemFromCart: (itemId: string) => void;
    removeFav: (itemId: string) => void;
    login: (user: any) => void;
    logout: () => void;
    cart: Array<Item>;
    setCart: (cart: Array<Item>) => void;
    fav: Array<Item>;
    setFav: (cart: Array<Item>) => void;
    setProduct: (product: Array<any>) => void;
    IrAoItem: (item: any) => void;
    Product: Array<any>;
    NovoItem: () => void;
    clearCart: () => void;

}

export const AppContext = createContext<AppContextProps>({
    state: { items: [], user: null },
    atualizarCart: (productId: number, newQuantity: number) => { },
    addItemToCart: (item: Item) => { },
    addFav: (item: Item) => { },
    removeItemFromCart: (itemId: string) => { },
    removeFav: (itemId: string) => { },
    login: (user: any) => { },
    logout: () => { },
    cart: [],
    setCart: (cart: Array<Item>) => { },
    fav: [],
    setFav: (cart: Array<Item>) => { },
    setProduct: (product: Array<any>) => { },
    IrAoItem: (item: any) => { },
    Product: [],
    NovoItem: () => { },
    clearCart: () => { },
});

function AppProvider(props: any) {
    const [state, setState] = useState<State>({ items: [], user: null });

    const [cart, setCart] = useState<Array<Item>>([]);

    const [fav, setFav] = useState<Array<Item>>([]);

    const [Product, setProduct] = useState<Array<any>>([]);

    const addFav = (item: Item) => {
        setFav((prevFav) => [...prevFav, item]);
    };

    const addItemToCart = (item: Item): void => {
        setCart((prevCart: Item[]) => {
            const itemIndex: number = prevCart.findIndex((cartItem: Item) => cartItem.productId === item.productId);
            if (itemIndex !== -1) {
                const updatedCart: Item[] = [...prevCart];
                updatedCart[itemIndex] = {
                    ...updatedCart[itemIndex],
                    quantidade: updatedCart[itemIndex].quantidade + 1,
                };
                return updatedCart;
            } else {
                return [...prevCart, item];
            }
        });
    };

    const atualizarCart = (productId: number, newQuantity: number) => {
        const itemIndex = cart.findIndex((cartItem: any) => cartItem.productId === productId);
        if (itemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[itemIndex] = {
                ...updatedCart[itemIndex],
                quantidade: newQuantity,
            };
            const confirmation = window.confirm('Tem certeza que deseja atualizar a quantidade desse item?');
            if (confirmation) {
                setCart(updatedCart);
            }
        }
    };

    const IrAoItem = (item: any) => {
        setProduct((prevProduct) => [...prevProduct, item]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const NovoItem = () => {
        setProduct([]);
    };

    const removeFav = (itemId: string) => {
        setFav((prevFav) =>
            prevFav.filter((item) =>
                item.productId !== itemId
            )
        );
    };

    const removeItemFromCart = (itemId: string) => {
        const confirmation = window.confirm('Tem certeza que deseja atualizar a quantidade desse item?');
        if (confirmation) {
            setCart((prevCart) =>
                prevCart.filter((item) =>
                    item.productId !== itemId
                )
            );
        }
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
                fav,
                setFav,
                removeFav,
                addFav,
                atualizarCart
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;