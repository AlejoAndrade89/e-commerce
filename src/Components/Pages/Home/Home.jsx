import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./Home.css";
export const Home = () => {
  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ maxWidth: "600px", width: "100%" }}
        >
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom align="center">
              Bienvenido a mi página
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Empezar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
