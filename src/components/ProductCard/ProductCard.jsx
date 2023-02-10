import React from "react";
import "./productCard.css";

function ProductCard(props) {
  return (
    <React.Fragment>
      <div className="productCard">
        <div className="productName">
          <h3>{props.name}</h3>
        </div>
        <div className="productData">
          <div className="price discount">
            <p>Precio: ${props.price}</p>
            <p>Descuento: {props.discount}%</p>
            <p>
              Precio final: $
              {Math.floor(props.price - (props.price * props.discount) / 100)}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductCard;
