import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CatogarySlice from "./slices/CatogarySlice";
import searchSlice from "./slices/searchSlice";
const Store = configureStore({
    reducer: {
        Cart : CartSlice,
        category: CatogarySlice,
        search: searchSlice
    },
});

export default Store;