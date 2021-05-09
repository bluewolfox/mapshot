import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getKakaoList } from "../../modules/actions/newMap";

const MapSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [lists, setLists] = useState([])
  const dispatch = useDispatch()

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onGetListMap = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(getKakaoList())

    const { kakao } = window;
    const places = new kakao.maps.services.Places();
    function callback(result: any, status: any) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result);

        setLists(result);
      }
    }
    places.keywordSearch('소사', callback);
  };

  return (
    <div className="map-search-box">
      주소 검색 <hr />
      <form onSubmit={onGetListMap}>
        <input
          type="text"
          value={keyword}
          onChange={onChangeInput}
          placeholder="주소를 검색하세요"
        />
      </form>
      {
        lists.map((item: { address_name: String }, i) => {
          return <div key={i}>{item.address_name}</div>
        })
      }
    </div>
  );
};

export default MapSearch;
