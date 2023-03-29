import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ elemento, deleteProductById }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        margin: "10px",
        padding: "20px",
        backgroundColor: "lightgray",
      }}
    >
      <h2>Marca: {elemento.name}</h2>
      <img
        style={{
          maxWidth: "80%",
          height: "auto",
          margin: "20px",
          padding: "10px",
          objectFit: "cover",
        }}
        src={elemento.img}
        alt="imagenes zapatillas"
      />
      <h3>Precio: ${elemento.price}</h3>
      <h3>Stock: {elemento.stock}</h3>
      <h3>Descripcion: {elemento.description}</h3>
      <button onClick={() => deleteProductById(elemento.id)}>Eliminar</button>
      <Link to={`/productDetail/${elemento.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};
