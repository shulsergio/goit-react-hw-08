import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.items = [];
        // state.error = action.error.message;
      })
      .addCase(addContact.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;

        state.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.items = [];
        // state.error = action.error.message;
      })
      .addCase(deleteContact.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;

        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.items = [];
        // state.error = action.error.message;
      }),
});
export const contactsReducer = slice.reducer;
