import { configureStore } from "@reduxjs/toolkit";
import valueReducer from "./valueSlice";
export const store = configureStore({
  reducer: { valueInStore: valueReducer },
});
