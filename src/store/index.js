import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../reducer/counterReducer";
import counterReducerSlice from "../reducer/counterReducerSlice";
import dataListReducer from "../reducer/dataListReducer";
import productReducer from "../reducer/productReducer";

const store = configureStore({
  reducer: {
    auth: countReducer,
    slice: counterReducerSlice,
    list: dataListReducer,
    products: productReducer,
  },
});

export default store;
