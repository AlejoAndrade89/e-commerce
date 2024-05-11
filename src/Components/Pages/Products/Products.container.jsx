// en este archivo vamos a aprender como consumir APIS
//Reecordar las lineas comentadas es por que usamos un estado universal

import React, { useEffect, useState } from "react";
import {
  deleteProduct,
  getProductos,
  updateProduct,
} from "../../../services/productServices";
import { Products } from "./Products";

export const ProductsContainer = () => {
  const [items, setItems] = useState([]);

  const [isUniversal, setIsUniversal] = useState(false);

  useEffect(() => {
    setIsUniversal(false);
    const productos = getProductos();
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [isUniversal]);

  const deleteProductById = (id) => {
    deleteProduct(id);
    setIsUniversal(true);
    // eliminar
  };

  const updateProductById = (id) => {
    updateProduct(id, {
      price: 6000,
      name: "ZapsX",
    });
    setIsUniversal(true);
    //actualiza
  };
  console.log(items);

  return (
    <Products
      updateProductById={updateProductById}
      deleteProductById={deleteProductById}
      items={items}
    />
  );
};
