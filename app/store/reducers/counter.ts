import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increase(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export default counterSlice.reducer;
export const {increase} = counterSlice.actions;
