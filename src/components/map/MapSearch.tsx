import React, { MouseEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { M_Map } from "../../models";
import { RootState } from "../../modules";
import { mapActions } from "../../modules/reducers/map";
import { kakao, places, setKakaoMarkers } from "../../utils/Kakao";
import PageNation from "./PageNation";

type List = M_Map.lists;
type Pagenation = M_Map.pagenation;


const MapSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [functions, setFunctions] = useState(null)
  const lists = useSelector((state: RootState) => state.map.lists);
  const pagenation = useSelector((state: RootState) => state.map.pageNation);
  const dispatch = useDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onGetListMap = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keyword) {
      alert("검색어를 입력하세요.")
      return
    }

    const callback = (result: any, status: any, pagenation: Pagenation) => {
      if (status === kakao.maps.services.Status.OK) {
        dispatch(mapActions.setList(result))
        setKakaoMarkers(result)
        const pageNationProps: any = {};
        const functionProps: any = {};
        for (const key in pagenation) {
          const newKey = key as keyof Pagenation;
          if (typeof pagenation[newKey] !== 'function') {
            pageNationProps[newKey] = pagenation[newKey]
          } else {
            functionProps[newKey] = pagenation[newKey]
          }
        }
        setFunctions(functionProps)
        dispatch(mapActions.setPagenation(pageNationProps))
      }
    }
    places.keywordSearch(keyword, callback);
  };

  const onClickAddress = (e: MouseEvent): void => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="map-search-box">
      <h3 className="map-search-title">
        주소 검색
      <span>검색 결과 : {pagenation.totalCount > 0 ? pagenation.totalCount : 0}</span>
      </h3>
      <hr />
      <form onSubmit={onGetListMap}>
        <input
          type="text"
          value={keyword}
          onChange={onChangeInput}
          placeholder="주소를 검색하세요"
          className="mapSearch-box"
        />
      </form>
      <div className="map-search-list">
        {
          lists.map(({ address_name, phone, place_name }: List, i: number) => {
            return (
              <div key={i} className="address-item" onClick={onClickAddress}>
                <div className={!phone ? 'no-phone' : ''}>{place_name + ' : ' + address_name}</div>
                {
                  phone && (
                    <span className="phone">{phone}</span>
                  )
                }
              </div>
            )
          })
        }
      </div>
      {
        lists.length > 0 &&
        <>
          <hr />
          <PageNation pagenation={pagenation} funcs={functions} />
        </>
      }
    </div>
  );
};

export default MapSearch;
