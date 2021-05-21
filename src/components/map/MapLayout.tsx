import React, { useEffect } from "react";
import MapArea from "./MapArea";
import MapSearch from "./MapSearch";
import { setKakaoMaps } from "../../utils/Kakao";

const MapLayout = () => {

  useEffect(() => {
    setKakaoMaps();
  }, []);

  return (
    <div className="map-layout">
      <MapArea />
      <MapSearch />
    </div>
  );
};

export default MapLayout;
