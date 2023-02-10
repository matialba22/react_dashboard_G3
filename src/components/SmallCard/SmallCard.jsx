import React from "react";
import "./smallCard.css";

function SmallCard(props) {
  return (
    <React.Fragment>
      <div className="contenedor-small-data">
        <h3 className="data-title">Total {props.name}: </h3>
        <p className="data-number">
          {props.productCount} {props.userCount} {props.categoryCount}
        </p>
      </div>
    </React.Fragment>
  );
}

export default SmallCard;
