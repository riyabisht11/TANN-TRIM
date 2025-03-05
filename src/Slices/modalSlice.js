import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegisterOpen: false, // Default state is closed
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openRegister: (state) => {
      state.isRegisterOpen = true;
    },
    closeRegister: (state) => {
      state.isRegisterOpen = false;
    },
    toggleRegister: (state) => { // ✅ Toggle function
      state.isRegisterOpen = !state.isRegisterOpen;
    },
  },
});

export const { openRegister, closeRegister, toggleRegister } = modalSlice.actions;
export default modalSlice.reducer;
