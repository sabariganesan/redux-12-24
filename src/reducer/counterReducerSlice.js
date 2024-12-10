import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 1, user: "Slice" };

const counterReducerSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment } = counterReducerSlice.actions;

export default counterReducerSlice.reducer;
