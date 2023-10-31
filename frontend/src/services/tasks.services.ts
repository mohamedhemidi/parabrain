/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PATH } from "../constants/environements";

export const getTasks = createAsyncThunk("tasks/getTasks", async () => {
  const response = await axios.get(PATH.getTasks);
  return response.data;
});

export const viewTask = createAsyncThunk(
  "tasks/viewTask",
  async (id: string) => {
    const response = await axios.get(`${PATH.getTasks}/${id}`);
    return response.data;
  }
);
export const updatedTask = createAsyncThunk(
  "tasks/updatedTask",
  async (data: any) => {
    const response = await axios.put(
      `${PATH.updateTask}/${data.id}`,
      data.form
    );
    return response.data;
  }
);
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string) => {
    const response = await axios.put(`${PATH.deleteTask}/${id}`);
    return response.data;
  }
);
export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (data: any) => {
    const response = await axios.post(`${PATH.createTask}`, data);
    return response.data;
  }
);

