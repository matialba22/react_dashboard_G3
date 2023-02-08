import React from "react";
import SmallCard from "../SmallCard/SmallCard";
import "./contentRowTop.css";

function ContentRowTop() {
  return (
    <React.Fragment>
      <div className="contentRowTop">
        <SmallCard name="productos" />
        <SmallCard name="usuarios" />
        <SmallCard name="categorías" />
      </div>
    </React.Fragment>
  );
}

export default ContentRowTop;
