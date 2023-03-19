// en este archivo vamos a aprender como consumir APIS

import axios from "axios";
import React, { useEffect, useState } from "react";

export const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productos = axios.get("http://localhost:5000/products");
    productos
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(items);

  return (
    <div>
      {items.map((elemento) => (
        <h1 key={elemento.id}>{elemento.name}</h1>
      ))}
    </div>
  );
};
