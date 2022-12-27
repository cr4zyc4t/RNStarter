import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const counter2Slice = createSlice({
  name: "Counter2",
  initialState: {
    value: 0,
  },
  reducers: {
    increase2(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export default counter2Slice.reducer;
export const {increase2} = counter2Slice.actions;
