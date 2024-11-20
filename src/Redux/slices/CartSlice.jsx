import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",

    initialState: {
        Cart: [],
    },

    reducers: {
        addtoCard: ( state, action)=> {
          state.Cart.push(action.payload);
        },
        removetoCard: (state , action) => {
          state.Cart = state.Cart.filter((item)=> item.id != action.payload.id);
        } 
    }
})

export const {addtoCard , removetoCard} = CartSlice.actions;
export default CartSlice.reducer;