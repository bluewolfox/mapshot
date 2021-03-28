import React, { useState } from "react";
import MapSearchListItem from "./MapSearchListItem";
const { kakao } = window;

const MapSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);

  const onChangeInput = (e) => {
    setKeyword(e.target.value);
  };

  const searchResult = (data, status, pagination) => {
    console.log(data);
    console.log(pagination);

    if (status === kakao.maps.services.Status.OK) {
      setResult(data);
      // // 정상적으로 검색이 완료됐으면
      // // 검색 목록과 마커를 표출합니다
      // displayPlaces(data);

      // // 페이지 번호를 표출합니다
      // displayPagination(pagination);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
      return;
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert("검색 결과 중 오류가 발생했습니다.");
      return;
    }
  };

  const searchLocation = (e) => {
    e.preventDefault();
    if (!keyword.replace(/^\s+|\s+$/g, "")) {
      alert("키워드를 입력해주세요!");
      return false;
    }

    // 키워드 검색을 요청하는 함수입니다
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, searchResult);
  };

  return (
    <div className="map-search">
      <form onSubmit={searchLocation}>
        <div className="search-input">
          <input type="text" value={keyword} onChange={onChangeInput} />
          <button type="submit">검색</button>
        </div>
      </form>
      <div className="maplist">
        {result.map((list) => (
          <MapSearchListItem key={list.id} item={list} />
        ))}
      </div>
    </div>
  );
};

export default MapSearch;
