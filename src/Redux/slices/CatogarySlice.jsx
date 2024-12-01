import { createSlice } from "@reduxjs/toolkit";

const CatogarySlice = createSlice({
    name: "category",

    initialState: {
        category: "ALL"
    },

    reducers: {
      setCategory : (state , action) => {
        state.category = action.payload;
      }
    }

})

export const {setCategory} = CatogarySlice.actions;
export default CatogarySlice.reducer;