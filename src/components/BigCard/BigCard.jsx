import React from "react";
import "./bigCard.css";

function BigCard(props) {
  return (
    <React.Fragment>
      <div className="bigCard">
        {props.countByCategory ? (
          <div>
            <h3>Productos por categoría:</h3>
            <ul>
              {Object.entries(props.countByCategory).map(
                ([category, count]) => (
                  <li key={category}>
                    {category}: {count}
                  </li>
                )
              )}
            </ul>
          </div>
        ) : props.lastProduct ? (
          <div>
            <h3>Último producto:</h3>
            <ul>
              <li>Nombre: {props.lastProduct.name}</li>
              <li>Tamaño: {props.lastProduct.size}</li>
              <li>Precio: ${props.lastProduct.price}</li>
              <li>Descuento: {props.lastProduct.discount}%</li>
              <li>
                Precio final:{" $"}
                {props.lastProduct.price -
                  (props.lastProduct.price * props.lastProduct.discount) / 100}
              </li>
            </ul>
          </div>
        ) : props.lastUser ? (
          <div>
            <h3>Último usuario:</h3>
            <ul>
              <li>Nombre: {props.lastUser.name}</li>
              <li>Apellido: {props.lastUser.lastName}</li>
              <li>Email: {props.lastUser.email}</li>
            </ul>
          </div>
        ) : (
          <h3>No hay información disponible</h3>
        )}
      </div>
    </React.Fragment>
  );
}

export default BigCard;
