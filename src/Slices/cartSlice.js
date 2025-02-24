import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0, 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Adds an item to the cart
    addToCart: (state, action) => {
      const newItem = action.payload;
      const priceNumber = parseFloat(newItem.discountedPrice.replace(/[^\d.]/g, ""));
      
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
    
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    
      // Recalculate total amount and total quantity
      state.totalAmount = state.cartItems.reduce((total, item) => {
        const itemPrice = parseFloat(item.discountedPrice.replace(/[^\d.]/g, ""));
        return total + itemPrice * item.quantity;
      }, 0);
    
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);  // Update total quantity
    },

    // Removes an item from the cart based on its id
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    
      // Recalculate total amount and total quantity
      state.totalAmount = state.cartItems.reduce((total, item) => {
        const itemPrice = parseFloat(item.discountedPrice.replace(/[^\d.]/g, ""));
        return total + itemPrice * item.quantity;
      }, 0);
    
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);  // ✅ Update total quantity
    },
    
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        const itemPrice = parseFloat(item.discountedPrice.replace(/[^\d.]/g, ""));
        item.quantity += 1;
        state.totalAmount += itemPrice;
        state.totalQuantity += 1;  // ✅ Update total quantity
      }
    },
    
    
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        const itemPrice = parseFloat(item.discountedPrice.replace(/[^\d.]/g, ""));
        item.quantity -= 1;
        state.totalAmount -= itemPrice;
        state.totalQuantity -= 1;  // ✅ Update total quantity
      }
    },
    
  },
});


export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
