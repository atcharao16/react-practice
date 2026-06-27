import { createContext, useContext, useReducer } from "react";
import { cartReducerFun } from "./Reducer";

const CartContext = createContext();

const initial = {
    cart : []
};

const CartProvider = ({children}) =>{
    const [cartlist, dispatch] = useReducer(cartReducerFun, initial);
    
   return (
    <CartContext.Provider value = {{cartlist, dispatch}}>
        {children}
    </CartContext.Provider>
   )
}


const useCart = () => useContext(CartContext);

export  {CartProvider, useCart}