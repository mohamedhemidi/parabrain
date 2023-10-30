import { createSlice } from "@reduxjs/toolkit";
import { getLists } from "../services/lists.services";

const initialState = {
  loading: false,
  list : [],
  error : ""
};

const ListSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getLists.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLists.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getLists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default ListSlice.reducer;
