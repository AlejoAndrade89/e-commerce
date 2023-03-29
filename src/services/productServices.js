import { productInstance } from "./productInstance";

export const getProductos = () => {
  let productos = productInstance.get();
  return productos;
};

export const getProductoById = (id) => {
  let producto = productInstance.get(`http://localhost:5000/products/${id}`);
  return producto;
};

export const deleteProduct = (id) => {
  return productInstance.delete(`/${id}`);
};

export const updateProduct = (id, data) => {
  return productInstance.patch(`/${id}`, data);
};

export const createProduct = (data) => {
  return productInstance.post("/", data);
};
