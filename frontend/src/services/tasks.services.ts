import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PATH } from "../constants/environements";

export const getTasks = createAsyncThunk("tasks/getTasks", async () => {
  const response = await axios.get(PATH.getTasks);
  return response.data;
});
