import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../reducer/counterReducer";

const store = configureStore({
  reducer: {
    auth: countReducer,
  },
});

export default store;
