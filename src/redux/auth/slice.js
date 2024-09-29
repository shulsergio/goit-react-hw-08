import { createSlice } from "@reduxjs/toolkit";
import { logIn, register } from "./operations";
import { act } from "react";

//создал в постмане
// {
//   "name": "Adrian Cross",
//   "email": "across_ss@mail.com",
//   "password": "examplepwd12345"
//
// }

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggetIn: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, {payload}) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggetIn = true;
      })
      .addCase(register.rejected, (state) => {
        state.isLoggetIn = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
      });
  },
});
export default authSlice.reducer;
