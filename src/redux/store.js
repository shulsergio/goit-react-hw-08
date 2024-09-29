import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import { contactsReducer } from "./contacts/slice";
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});
