import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PATH } from "../constants/environements";

export const getLists = createAsyncThunk("lists/getLists", async () => {
  const response = await axios.get(PATH.getLists);
  return response.data;
});
