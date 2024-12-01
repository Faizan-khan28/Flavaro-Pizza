import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CatogarySlice from "./slices/CatogarySlice";

const Store = configureStore({
    reducer: {
        Cart : CartSlice,
        category: CatogarySlice,
    },
});

export default Store;