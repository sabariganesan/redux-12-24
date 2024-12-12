import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
    updateProductsLoader: (state, action) => {
      return { ...state, isLoading: action.payload };
    },
    updateProductsError: (state, action) => {
      return { ...state, error: action.payload };
    },
  },
});

export const { updateProducts, updateProductsError, updateProductsLoader } =
  productReducer.actions;

export default productReducer.reducer;
