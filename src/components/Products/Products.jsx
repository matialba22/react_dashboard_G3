import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error));
  }, []);
  return (
    <React.Fragment>
      <h2 className="productList-title">Listado de productos:</h2>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Products;
