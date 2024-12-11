import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameList: [],
};

const dataListReducer = createSlice({
  name: "dataListReducer",
  initialState,
  reducers: {
    addNewName: (state, action) => {
      //   state.nameList.push(action.payload);
      return { ...state, nameList: [...state.nameList, action.payload] };
    },
  },
});

export const { addNewName } = dataListReducer.actions;

export default dataListReducer.reducer;
