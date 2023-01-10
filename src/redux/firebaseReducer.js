import { createSlice } from "@reduxjs/toolkit";

const userSliceReducer = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoggedIn: false,
  },
  reduder: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    logout(state) {
      // localStorage.removeItem("userId");
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});
export const { login, logout } = userSliceReducer.actions;
export const userReducer = userSliceReducer.reducer;
