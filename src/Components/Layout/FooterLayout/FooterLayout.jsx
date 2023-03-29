import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export const FooterLayout = () => {
  return (
    <div>
      <Outlet />
      <h3>Este es el footer</h3>
      <IconButton
        aria-label="volver"
        sx={{
          marginBottom: 2,
          bgcolor: "#f1f1f1",
          color: "#333",
          "&:hover": {
            bgcolor: "crimson",
          },
        }}
        onClick={() => window.history.back()}
      >
        <ArrowBack sx={{ fontSize: 25 }} />
      </IconButton>
    </div>
  );
};
