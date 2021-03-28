import React, { useEffect } from "react";
import { set } from "../utils/map";
import MapSearch from "./MapSearch";

const MapArea = () => {
  useEffect(() => {
    set()
  });

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
      <MapSearch />
    </>
  );
};

export default MapArea;
