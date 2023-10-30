import { createSlice } from "@reduxjs/toolkit";
import { getTasks } from "../services/tasks.services";

const initialState = {
  loading: false,
  tasks : [],
  error : ""
};

const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default TaskSlice.reducer;
