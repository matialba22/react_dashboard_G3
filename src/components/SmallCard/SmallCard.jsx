import React from "react";
import { useState, useEffect } from "react";
import "./smallCard.css";

function SmallCard(props) {
  // movies es el estado inicial al cual le estoy asignando un array vacio y setMovies es la funcion para actualizar el estado.
  const [products, setProducts] = useState([]);
  // poniendo action cuando renderiza la pagina por primera vez trae los resultados de busqueda con esa palabra
  const [users, setUsers] = useState([]);
  // poniendo action cuando renderiza la pagina por primera vez trae los resultados de busqueda con esa palabra
  const [categories, setCategories] = useState([]);

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
      <div className="contenedor-small-data">
        <h3>
          Total {props.name}: {products.count} {users.count} {numAttributes}
        </h3>
      </div>
    </React.Fragment>
  );
}

export default SmallCard;
