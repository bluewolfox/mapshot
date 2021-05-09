import { createAsyncThunk } from "@reduxjs/toolkit";

export const getKakaoList = createAsyncThunk(
  "map/getLists",
  async (data, thunkAPI) => {
    const { kakao } = window;
    const places = new kakao.maps.services.Places();
    let newResult = null;

    function callback(result, status) {
      if (status === kakao.maps.services.Status.OK) {
      }
    }
    places.keywordSearch('소사', callback);
    console.log(newResult);
  }
);
