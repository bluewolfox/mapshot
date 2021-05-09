import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: null,
  married: false,
  agent: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      console.log(action.payload);
      state = action.payload;
      return state;
    },
  },
  extraReducers: {},
});

export default userSlice;
