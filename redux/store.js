import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "redux/slices/moviesSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
