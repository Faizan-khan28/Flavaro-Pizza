import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",

    initialState: {
        Cart: [],
    },

    reducers: {
        addtoCard: ( state, action)=> {
          const existingItem = state.Cart.find((item) => item.id === action.payload.id);
          if(existingItem) {
           state.Cart = state.Cart.map((item) => item.id === action.payload.id ? {...item , qty: item.qty + 1} : item);
          }
          else {
            state.Cart.push(action.payload);
          }
        },
        removetoCard: (state , action) => {
          state.Cart = state.Cart.filter((item)=> item.id != action.payload.id);
        } 
    }
})

export const {addtoCard , removetoCard} = CartSlice.actions;
export default CartSlice.reducer;