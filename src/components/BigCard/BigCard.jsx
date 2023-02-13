import React from "react";
import "./bigCard.css";

function BigCard(props) {
  return (
    <React.Fragment>
      <div className="bigCard">
        {props.countByCategory ? (
          <div>
            <h2 className="bigCard-title">Productos por categoría:</h2>
            <ul className="ul-info">
              {Object.entries(props.countByCategory).map(
                ([category, count]) => (
                  <li key={category}>
                    {category}: <p>{count}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        ) : props.lastProduct ? (
          <div>
            <h2 className="bigCard-title">Último producto:</h2>
            <ul className="ul-info">
              <li>
                Nombre: <p>{props.lastProduct.name}</p>
              </li>
              <li>
                Tamaño: <p>{props.lastProduct.size}</p>
              </li>
              <li>
                Precio: <p>${props.lastProduct.price}</p>
              </li>
              <li>
                Descuento: <p>{props.lastProduct.discount}%</p>
              </li>
              <li>
                Precio final:{" "}
                <p>
                  $
                  {props.lastProduct.price -
                    (props.lastProduct.price * props.lastProduct.discount) /
                      100}
                </p>
              </li>
            </ul>
          </div>
        ) : props.lastUser ? (
          <div>
            <h2 className="bigCard-title">Último usuario:</h2>
            <ul className="ul-info">
              <li>
                Nombre: <p>{props.lastUser.name}</p>
              </li>
              <li>
                Apellido: <p>{props.lastUser.lastname}</p>
              </li>
              {props.lastUser.username ? (
                <li>
                  Nombre de usuario: <p>{props.lastUser.username}</p>
                </li>
              ) : null}
              <li>
                Email: <p>{props.lastUser.email}</p>
              </li>
            </ul>
          </div>
        ) : (
          <h2>No hay información disponible</h2>
        )}
      </div>
    </React.Fragment>
  );
}

export default BigCard;
