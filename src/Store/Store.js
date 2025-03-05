import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartReducer from "../Slices/cartSlice.js"
import modalReducer from "../Slices/modalSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
