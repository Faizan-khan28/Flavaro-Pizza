import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";

const Store = configureStore({
    reducer: {
        Cart : CartSlice,
    },
});

export default Store;