import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  keyword: "",
  lists: [],
  pageNation: {},
  kakaoObj: {},
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setList: (state, { payload }: PayloadAction<[]>) => {
      state.lists = payload;
    },
    setPagenation: (state, { payload }: PayloadAction<{}>) => {
      state.pageNation = payload;
    },
    setKakaoInit: (state, { payload }: PayloadAction<{}>) => {
      state.kakaoObj = payload
    },
  },
  extraReducers: {},
});

export const mapActions = { ...mapSlice.actions };
