import React, { useState, useEffect } from "react";
import BigCard from "../BigCard/BigCard";
import "./contentRowBottom.css";

function ContentRowBottom() {
  // movies es el estado inicial al cual le estoy asignando un array vacio y setMovies es la funcion para actualizar el estado.
  const [products, setProducts] = useState([]);
  // poniendo action cuando renderiza la pagina por primera vez trae los resultados de busqueda con esa palabra
  const [users, setUsers] = useState([]);
  const [countByCategory, setCountByCategory] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setCountByCategory(data.countByCategory);
      })
      .catch((error) => console.error(error));
  }, []);

  const lastProduct = products[products.length - 1] || {};

  useEffect(() => {
    fetch("http://localhost:3030/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error(error));
  }, []);

  const lastUser = users[users.length - 1] || {};

  return (
    <React.Fragment>
      <div className="contenedor-bigCards">
        <BigCard lastProduct={lastProduct} />
        <BigCard lastUser={lastUser} />
        {countByCategory && <BigCard countByCategory={countByCategory} />}
      </div>
    </React.Fragment>
  );
}

export default ContentRowBottom;
