import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
  },
});

export const { updateProducts } = productReducer.actions;

export default productReducer.reducer;
