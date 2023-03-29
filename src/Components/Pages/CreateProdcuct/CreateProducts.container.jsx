import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../services/ProductServices";
import { CreateProduct } from "./CreateProduct";
import Swal from "sweetalert2";

export const CreateProductsContainer = () => {
  const [newProduct, setNewproduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    category: "",
    img: "",
  });
  const navigate = useNavigate();

  const dispararAlerta = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

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

    const create = createProduct(data);
    create.then((res) => console.log(res)).catch((err) => console.log(err));
    navigate("/shop");
    // crear
  };

  const handleChange = (e) => {
    setNewproduct({ ...newProduct, [e.target.name]: e.target.value });
    // obtiene
  };

  return (
    <div>
      <CreateProduct
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        dispararAlerta={dispararAlerta}
      />
    </div>
  );
};
