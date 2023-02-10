import React from "react";
import "./bigCard.css";

function BigCard(props) {
  return (
    <React.Fragment>
      <div className="bigCard">
        {props.countByCategory ? (
          <React.Fragment>
            <h2>Categorías:</h2>
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
          <h2>Último producto: {props.lastProduct.name}</h2>
        ) : props.lastUser ? (
          <h2>Último usuario: {props.lastUser.name}</h2>
        ) : (
          <h2>No hay información disponible</h2>
        )}
      </div>
    </React.Fragment>
  );
}

export default BigCard;
