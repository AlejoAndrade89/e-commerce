import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Pages/Home/Home";
import { CreateProductsContainer } from "./Components/Pages/CreateProdcuct/CreateProducts.container";
import { NavbarLayout } from "./Components/Layout/NavbarLayout/NavbarLayout";
import { FooterLayout } from "./Components/Layout/FooterLayout/FooterLayout";
import { ProductsContainer } from "./Components/Pages/Products/Products.container";
import { ProductDetailContainer } from "./Components/Pages/ProductDetail/ProductDetail.container";
import { LoginContainer } from "./Components/Pages/Login/Login.container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginContainer />} />

        <Route element={<NavbarLayout />}>
          <Route path="/" element={<Home />} />
          <Route element={<FooterLayout />}>
            <Route path="/cart" element={<h1>Carrito</h1>} />
            <Route path="/shop" element={<ProductsContainer />} />
            <Route
              path="/create-product"
              element={<CreateProductsContainer />}
            />
            <Route
              path="/productDetail/:id"
              element={<ProductDetailContainer />}
            />
          </Route>
        </Route>

        <Route path="*" element={<h1>404 la pagina no existe </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
