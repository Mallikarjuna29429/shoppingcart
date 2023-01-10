import { createSlice } from "@reduxjs/toolkit";
const auth = createSlice({
  name: "auth",
  initialState: {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    LoginRequest: (state, action) => {
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      };
    },
    LoginSucess: (state, action) => {
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user,
      };
    },
    LoginFailure: (state, action) => {
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
      };
    },
    LogoutRequest: (state, action) => {
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false,
      };
    },
    LogoutSucess: (state, action) => {
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {},
      };
    },
    LogoutFailure: (state, action) => {
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true,
      };
    },
    VerifyRequest: (state, action) => {
      return {
        ...state,
        isVerifying: true,
        verifyingError: false,
      };
    },
    VerifySucess: (state, action) => {
      return {
        ...state,
        isVerifying: false,
      };
    },
    default: (state) => {
      return { state };
    },
  },
});
export const authReducer = auth.reducer;
export const {
  LoginRequest,
  LoginSucess,
  VerifyRequest,
  VerifySucess,
  LogoutRequest,
  LogoutSucess,
  LogoutFailure,
} = auth.actions;
