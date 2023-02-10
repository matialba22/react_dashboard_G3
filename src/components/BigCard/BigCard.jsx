import React from "react";
import "./bigCard.css";

function BigCard(props) {
  return (
    <React.Fragment>
      <div className="bigCard">
        {props.countByCategory ? (
          <React.Fragment>
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
          </React.Fragment>
        ) : props.lastProduct ? (
          <h3>Último producto: {props.lastProduct.name}</h3>
        ) : props.lastUser ? (
          <h3>Último usuario: {props.lastUser.name}</h3>
        ) : (
          <h3>No hay información disponible</h3>
        )}
      </div>
    </React.Fragment>
  );
}

export default BigCard;
