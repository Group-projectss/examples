import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;

      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("isAuth", true);
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;

      localStorage.removeItem("user");
      localStorage.removeItem("isAuth");
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectIsAuth = (state) => state.auth.isAuth;
export default authSlice.reducer;
