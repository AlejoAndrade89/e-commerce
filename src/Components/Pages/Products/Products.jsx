import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../../Common/ProductCard/ProductCard";

export const Products = ({
  updateProductById,
  deleteProductById,

  items,
}) => {
  return (
    <div>
      <Link to="/create-product">
        <button
          style={{
            marginTop: "40px",
          }}
        >
          Agregar nuevo producto
        </button>
      </Link>
      <h1 style={{ fontSize: "2.5rem ", color: "whitesmoke" }}>CATALOGO</h1>
      {items.map((elemento) => (
        <ProductCard
          deleteProductById={deleteProductById}
          updateProductById={updateProductById}
          elemento={elemento}
          key={elemento.id}
        />
      ))}
    </div>
  );
};
