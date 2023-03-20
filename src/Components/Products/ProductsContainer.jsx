// en este archivo vamos a aprender como consumir APIS
//Reecordar las lineas comentadas es por que usamos un estado universal
import { color } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Products } from "./Products";

export const ProductsContainer = () => {
  const [items, setItems] = useState([]);
  const [newProduct, setNewproduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    category: "",
    img: "",
  });
  //const [isCreated, setIsCreated] = useState(false);
  //const [isDelete, setIsDelete] = useState(false);
  //const [isUpdated, setIsUpdated] = useState(false);
  const [isUniversal, setIsUniversal] = useState(false);

  useEffect(() => {
    //setIsCreated(false);
    //setIsDelete(false);
    //setIsUpdated(false);
    setIsUniversal(false);
    const productos = axios.get("http://localhost:5000/products");
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [isUniversal]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: newProduct.name,
      price: Number(newProduct.price),
      stock: newProduct.stock,
      description: newProduct.description,
      category: newProduct.category,
      img: newProduct.img,
    };

    const create = axios.post("http://localhost:5000/products", data);
    create.then((res) => console.log(res)).catch((err) => console.log(err));
    setIsUniversal(true);
    // crear
  };

  const handleChange = (e) => {
    setNewproduct({ ...newProduct, [e.target.name]: e.target.value });
    // obtiene
  };

  const deleteProductById = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`);
    setIsUniversal(true);
    // eliminar
  };

  const updateProductById = (id) => {
    axios.patch(`http://localhost:5000/products/${id}`, {
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
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      items={items}
    />
  );
};
