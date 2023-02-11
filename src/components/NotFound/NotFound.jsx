import React from "react";
import imagenFondo from "../../assets/images/404.jpg";
import "./notFound.css";

function NotFound() {
  return (
    <div className="container">
      <h1>404 Not Found</h1>
      <img
        className="img-404"
        src={imagenFondo}
        alt=" Star Wars - Mandalorian "
      />
    </div>
  );
}

export default NotFound;
