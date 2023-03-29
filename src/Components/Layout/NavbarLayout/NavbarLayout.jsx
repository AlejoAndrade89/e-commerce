import { Box } from "@mui/system";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const NavbarLayout = () => {
  return (
    <Box>
      <Box>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
        >
          <button>Login</button>
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
        >
          <button>Tienda</button>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
        >
          <button>Carrito</button>
        </NavLink>
      </Box>
      <Outlet />
    </Box>
  );
};
