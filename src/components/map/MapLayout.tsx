import React from "react";
import MapArea from "./MapArea";
import MapSearch from "./MapSearch";

const MapLayout = () => {
  return (
    <div className="map-layout">
      <MapArea />
      <MapSearch />
    </div>
  );
};

export default MapLayout;
