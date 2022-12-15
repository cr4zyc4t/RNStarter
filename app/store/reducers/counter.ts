import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increase(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
  },
});

export default counterSlice.reducer;
export const {increase} = counterSlice.actions;
