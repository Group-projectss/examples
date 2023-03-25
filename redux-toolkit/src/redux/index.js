import { configureStore } from "@reduxjs/toolkit";
import app from "./app";
import auth from "./auth";

export const store = configureStore({
  reducer: {
    app,
    auth,
  },
});
