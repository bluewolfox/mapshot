import { createSlice } from "@reduxjs/toolkit";
import { getKakaoList } from "../actions/newMap";

const initialState = {
  keyword: "",
  search: {},
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {},
  extraReducers: {
    [getKakaoList.fulfilled]: (state, action) => {
      console.log(action);
    },
  },
});

export default mapSlice;
