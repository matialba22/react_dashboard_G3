import React from "react";
import "./productCard.css";

function ProductCard(props) {
  const { product } = props;

  return (
    <React.Fragment>
      <div className="productCard">
        <div className="productName">
          <h3>{product.name}</h3>
        </div>
        <div className="productData">
          <div>
            <p>Tamaño: </p>
            <p className="values">{product.size}</p>
          </div>
          <div>
            <p>Precio: </p>
            <p className="values">${product.price}</p>
          </div>
          <div>
            <p>Descuento: </p>
            <p className="values">{product.discount}%</p>
          </div>
          <div>
            <p>Precio final: </p>
            <p className="values">
              $
              {Math.floor(
                product.price - (product.price * product.discount) / 100
              )}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductCard;
