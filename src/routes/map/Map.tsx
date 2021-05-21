import React from "react";
import "../../assets/scss/Map.scss";
import MapLayout from "../../components/map/MapLayout";
import MapOptions from "../../components/map/MapOptions";

const Map = () => {
  return (
    <>
      <MapLayout />
      <MapOptions />
    </>
  );
};

export default Map;
