import React from "react";
import "./smallCard.css";

function SmallCard(props) {
  return (
    <React.Fragment>
      <div className="contenedor-small-data">
        <h3>
          Total {props.name}: {props.productCount} {props.userCount}{" "}
          {props.categoryCount}
        </h3>
      </div>
    </React.Fragment>
  );
}

export default SmallCard;
