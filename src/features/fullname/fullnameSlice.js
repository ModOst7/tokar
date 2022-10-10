import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    firstName: "",
    middleName: "",
    lastName: "",
  },
};

export const fullnameSlice = createSlice({
  name: "fullname",
  initialState,
  reducers: {
    changeFirstName: (state, action) => {
      state.value.firstName = action.payload;
    },
    changeMiddleName: (state, action) => {
      state.value.middleName = action.payload;
    },
    changeLastName: (state, action) => {
      state.value.lastName = action.payload;
    },
  },
});

export const { changeFirstName, changeMiddleName, changeLastName } =
  fullnameSlice.actions;

export const selectFullname = (state) => state.fullname.value;

export default fullnameSlice.reducer;
