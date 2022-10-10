import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import fullnameReducer from "../features/fullname/fullnameSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fullname: fullnameReducer,
  },
});
