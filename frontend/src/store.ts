import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import themeReducer from "./reducers/UIReducer";
import ListReducer from "./reducers/ListReducer";
import TaskReducer from "./reducers/TaskReducer";
import ModalReducer from "./reducers/ModalReducer";

export const store = configureStore({
  reducer: {
    UI: themeReducer,
    modal: ModalReducer,
    lists: ListReducer,
    tasks: TaskReducer,
  },
  middleware: [thunkMiddleware],
});
