import { createAsyncThunk } from "@reduxjs/toolkit";

export const getKakaoList = createAsyncThunk(
  "map/getLists",
  async (data: string, thunkAPI) => {
    const { kakao } = window;
    const places = new kakao.maps.services.Places();
    let newResult: any;

    function callback(result: any, status: any) {
      if (status === kakao.maps.services.Status.OK) {
        newResult = result;
      }
    };
    places.keywordSearch(data, callback);
    console.log(newResult);



  }
);
