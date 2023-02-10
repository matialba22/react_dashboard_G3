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
          <div className="price discount">
            <p>Tamaño: {product.size}</p>
            <p>Precio: ${product.price}</p>
            <p>Descuento: {product.discount}%</p>
            <p>
              Precio final: $
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
