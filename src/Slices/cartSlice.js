import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Adds an item to the cart
    addToCart: (state, action) => {
      const newItem = action.payload;
      // Convert the price string to a number.
      const priceNumber = parseFloat(newItem.discountedPrice.replace(/[^\d.]/g, ""));

      // Check if item with same id already exists in the cart.
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        // Increase the quantity if item exists.
        existingItem.quantity += 1;
      } else {
        // Add new item with quantity set to 1.
        state.cartItems.push({ ...newItem, quantity: 1 });
      }

      // Recalculate total amount.
      state.totalAmount = state.cartItems.reduce((total, item) => {
        const itemPrice = parseFloat(item.discountedPrice.replace(/[^\d.]/g, ""));
        return total + itemPrice * item.quantity;
      }, 0);
    },

    // Removes an item from the cart based on its id
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.totalAmount = state.cartItems.reduce((total, item) => {
        const itemPrice = parseFloat(item.discountedPrice.replace(/[^\d.]/g, ""));
        return total + itemPrice * item.quantity;
      }, 0);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
