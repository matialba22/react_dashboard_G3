import React from "react";
import BigCard from "../BigCard/BigCard";
import "./contentRowBottom.css";

function ContentRowBottom() {
  return (
    <React.Fragment>
      <div className="contenedor-bigCards">
        <BigCard />
        <BigCard />
        <BigCard />
      </div>
    </React.Fragment>
  );
}

export default ContentRowBottom;
