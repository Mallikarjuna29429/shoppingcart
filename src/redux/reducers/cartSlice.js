import { createSlice } from "@reduxjs/toolkit";
import React, { Component } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    users: [],
    loggedInUser: { id: "", email: "", password: "" },
  },
  reducers: {
    logeedin: (state, action) => {
      // console.log(action.payload);
      return { ...state, loggedInUser: action.payload };
    },
    Register: (state, action) => {
      return { ...state, users: [...state.users, action.payload] };
    },
    LogOut: (state, action) => {
      console.log("Log out dispatched");
      return { ...state, loggedInUser: action.payload };
    },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  logeedin,
  Register,
  LogOut,
} = cartSlice.actions;
