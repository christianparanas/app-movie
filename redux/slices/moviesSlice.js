import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    func: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { func } = moviesSlice.actions;

export default moviesSlice.reducer;
