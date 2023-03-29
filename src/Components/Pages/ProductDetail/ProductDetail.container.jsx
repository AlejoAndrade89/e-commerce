import React, { useEffect, useState } from "react";
import { ProductDetail } from "./ProductDetail";
import { useParams } from "react-router-dom";
import {
  getProductoById,
  updateProduct,
} from "../../../services/productServices";

export const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});

  const [showForm, setShowForm] = useState(false);
  const [productSelected, setProductSelected] = useState({
    name: product?.name,
    img: product?.img,
    price: product?.price,
    stock: product?.stock,
    description: product?.description,
  });

  const { id } = useParams();
  console.log(id);

  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    setIsUpdated(false);
    let producto = getProductoById(id);
    producto.then((res) => setProduct(res.data));
  }, [isUpdated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, productSelected);
    setIsUpdated(true);
  };

  return (
    <div>
      <ProductDetail
        product={product}
        showForm={showForm}
        setShowForm={setShowForm}
        handleSubmit={handleSubmit}
        productSelected={productSelected}
        setProductSelected={setProductSelected}
      />
    </div>
  );
};
