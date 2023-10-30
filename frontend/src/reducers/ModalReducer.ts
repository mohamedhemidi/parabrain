import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.open = true;
    },
    closeModal: (state) => {
      state.open = false;
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;
