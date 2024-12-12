import { createSlice } from "@reduxjs/toolkit";
import { getProductsAsyncThunk } from "../service/ProductService";

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
  extraReducers: (builder) => {
    builder
      .addCase(getProductsAsyncThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProductsAsyncThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProductsAsyncThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Something went wrong";
      });
  },
});

export const { updateProducts, updateProductsError, updateProductsLoader } =
  productReducer.actions;

export default productReducer.reducer;
