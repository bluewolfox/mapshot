import React, { useState } from "react";
import "./search.scss";

const MapPicture = () => {
  const [state, setState] = useState("");

  return (
    <>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </>
  );
};

export default MapPicture;
