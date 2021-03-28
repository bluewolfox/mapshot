import React from "react";
import MapArea from "./components/MapArea";
import MapPicture from "./components/MapPicture";

const MapView = () => {
  return (
    <div
      className="App"
      style={{ width: "50%", height: "500px", display: "flex" }}
    >
      <MapArea />
      <MapPicture />
    </div>
  );
};

export default MapView;
