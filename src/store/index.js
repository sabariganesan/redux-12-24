import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../reducer/counterReducer";
import counterReducerSlice from "../reducer/counterReducerSlice";

const store = configureStore({
  reducer: {
    auth: countReducer,
    slice: counterReducerSlice,
  },
});

export default store;
