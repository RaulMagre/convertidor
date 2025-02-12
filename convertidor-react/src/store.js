import { configureStore } from "@reduxjs/toolkit";
import convertReducer from "./features/convertSlice";

export const store = configureStore({
  reducer: {
    convert: convertReducer,
  },
});
