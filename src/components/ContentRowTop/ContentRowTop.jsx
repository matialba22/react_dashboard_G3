import React, { useState, useEffect } from "react";
import SmallCard from "../SmallCard/SmallCard";
import "./contentRowTop.css";

function ContentRowTop() {
  // movies es el estado inicial al cual le estoy asignando un array vacio y setMovies es la funcion para actualizar el estado.
  const [products, setProducts] = useState([]);
  // poniendo action cuando renderiza la pagina por primera vez trae los resultados de busqueda con esa palabra
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((response) => response.json())
      .then((products) => setProducts(products))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/api/users")
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((error) => console.log(error));
  }, []);

  let countByCategory, numAttributes;
  if (products && products.countByCategory) {
    countByCategory = products.countByCategory;
    numAttributes = Object.keys(countByCategory).length;
  } else {
    countByCategory = {};
    numAttributes = 0;
  }
  return (
    <React.Fragment>
      <div className="welcome">
        <h2>Bienvenido al dashboard de Wine House</h2>
      </div>
      <div className="contentRowTop">
        <SmallCard name="productos" productCount={products.count} />
        <SmallCard name="usuarios" userCount={users.count} />
        <SmallCard name="categorías" categoryCount={numAttributes} />
      </div>
    </React.Fragment>
  );
}

export default ContentRowTop;
