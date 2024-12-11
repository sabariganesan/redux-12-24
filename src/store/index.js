import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../reducer/counterReducer";
import counterReducerSlice from "../reducer/counterReducerSlice";
import dataListReducer from "../reducer/dataListReducer";

const store = configureStore({
  reducer: {
    auth: countReducer,
    slice: counterReducerSlice,
    list: dataListReducer,
  },
});

export default store;
