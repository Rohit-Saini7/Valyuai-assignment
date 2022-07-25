import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const valueSlice = createSlice({
  name: "valueInStore",
  initialState,
  reducers: {
    assignValue: (state, action) => {
      state.valueInStore = action.payload;
    },
  },
});

export const { assignValue } = valueSlice.actions;

export default valueSlice.reducer;
