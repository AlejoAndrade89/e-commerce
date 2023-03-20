import React from "react";

export const Products = ({
  updateProductById,
  deleteProductById,
  handleChange,
  handleSubmit,
  items,
}) => {
  return (
    <div>
      <h1 style={{ fontSize: "2.5rem ", color: "whitesmoke" }}>CATALOGO</h1>
      {items.map((elemento) => (
        <div
          key={elemento.id}
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
              width: "150px",
              height: "150px",
              margin: "20px",
              padding: "10px",
            }}
            src={elemento.img}
            alt="imagenes zapatillas"
          />
          <h3>Precio: ${elemento.price}</h3>
          <h3>Stock: {elemento.stock}</h3>
          <h3>Description: {elemento.description}</h3>
          <button onClick={() => deleteProductById(elemento.id)}>
            Eliminar
          </button>
          <button onClick={() => updateProductById(elemento.id)}>Editar</button>
        </div>
      ))}
      <h2 style={{ color: "whitesmoke" }}>INGRESO PRODUCTO</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="nombre del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="precio del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="stock"
          placeholder="stock del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="descripcion del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="categoria del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="img"
          placeholder="url de la imagen"
          onChange={handleChange}
        />
        <br />
        <button style={{ marginTop: "25px" }} type="submit">
          Crear
        </button>
      </form>
    </div>
  );
};
