import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    item: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'Add'){
            const updatedItems = state.item.concat();
            const updatedAmount = state.totalAmount + action.item.price + action.item.amount;
            return {
                item: updatedItems,
                totalAmount: updatedAmount
            };
    }
    return defaultCartState;
};


const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);


    const addItemToCart=(item)=>{
        dispatchCartAction({type: "Add", item: item});
    };
    const removeItemfromCart=(id)=>{
        dispatchCartAction({type: "Remove", id: id});

    };


    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCart ,
        removeItem: removeItemfromCart
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider;