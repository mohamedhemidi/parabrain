import { createSlice } from "@reduxjs/toolkit";
import {
  createTask,
  deleteTask,
  getTasks,
  updatedTask,
  viewTask,
} from "../services/tasks.services";

const initialState = {
  allTasks: {
    loading: false,
    error: "",
    data: null,
  },
  task: {
    loading: false,
    error: "",
    data: null,
  },
};

const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTasks.pending, (state) => {
        state.allTasks.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.allTasks.loading = false;
        state.allTasks.data = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.allTasks.loading = false;
        state.allTasks.error = action.error.message || "An error occurred";
      })
      .addCase(viewTask.pending, (state) => {
        state.task.loading = true;
      })
      .addCase(viewTask.fulfilled, (state, action) => {
        state.task.loading = false;
        state.task.data = action.payload;
      })
      .addCase(viewTask.rejected, (state, action) => {
        state.task.loading = false;
        state.task.error = action.error.message || "An error occurred";
      })
      .addCase(createTask.pending, (state) => {
        state.task.loading = true;
      })
      .addCase(createTask.fulfilled, (state) => {
        state.task.loading = false;
      })
      .addCase(createTask.rejected, (state, action) => {
        state.task.loading = false;
        state.task.error = action.error.message || "An error occurred";
      })
      .addCase(updatedTask.pending, (state) => {
        state.task.loading = true;
      })
      .addCase(updatedTask.fulfilled, (state) => {
        state.task.loading = false;
      })
      .addCase(updatedTask.rejected, (state, action) => {
        state.task.loading = false;
        state.task.error = action.error.message || "An error occurred";
      })
      .addCase(deleteTask.pending, (state) => {
        state.task.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state) => {
        state.task.loading = false;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.task.loading = false;
        state.task.error = action.error.message || "An error occurred";
      });
  },
});

export default TaskSlice.reducer;
