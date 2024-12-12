import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../reducer/counterReducer";
import counterReducerSlice from "../reducer/counterReducerSlice";
import dataListReducer from "../reducer/dataListReducer";
import productReducer from "../reducer/productReducer";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    auth: countReducer,
    slice: counterReducerSlice,
    list: dataListReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// middleware: (fn) => fn() => [].concat([])

export default store;
