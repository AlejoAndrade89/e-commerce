import React from "react";

export const ProductDetail = ({
  product,
  showForm,
  setShowForm,
  handleSubmit,
  productSelected,
  setProductSelected,
}) => {
  return (
    <div>
      <h1>Marca: {product.name}</h1>
      <h3>${product.price}</h3>
      <img src={product.img} alt="" />
      <h3> Stock: {product.stock}</h3>
      <h3>Descripcion: {product.description}</h3>
      <button onClick={() => setShowForm(true)}>Editar Producto</button>

      {showForm && (
        <form style={{}} onSubmit={handleSubmit}>
          <input
            type="text"
            defaultValue={product.name}
            onChange={(e) =>
              setProductSelected({ ...productSelected, name: e.target.value })
            }
          />
          <input
            type="text"
            defaultValue={product.price}
            onChange={(e) =>
              setProductSelected({ ...productSelected, price: e.target.value })
            }
          />
          <input
            type="text"
            defaultValue={product.img}
            onChange={(e) =>
              setProductSelected({ ...productSelected, img: e.target.value })
            }
          />
          <input
            type="text"
            defaultValue={product.stock}
            onChange={(e) =>
              setProductSelected({ ...productSelected, stock: e.target.value })
            }
          />
          <input
            type="text"
            defaultValue={product.description}
            onChange={(e) =>
              setProductSelected({
                ...productSelected,
                description: e.target.value,
              })
            }
          />
          <br />
          <button type="submit">Guardar Cambios</button>
        </form>
      )}
    </div>
  );
};
