import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from "./slices/navSlice";

export const store = configureStore({
  reducer: { nav: navSliceReducer },
});
