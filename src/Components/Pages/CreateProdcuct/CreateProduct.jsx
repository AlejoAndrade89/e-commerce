import React from "react";
import { Box, Grid, TextField, Stack, Button } from "@mui/material";

export const CreateProduct = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <Box
        sx={{
          marginTop: 10,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleChange}
              name="name"
              label="Nombre del producto"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleChange}
              name="price"
              label="Precio del producto"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleChange}
              name="stock"
              label="Stock"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleChange}
              name="description"
              label="Descripcion"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleChange}
              name="category"
              label="Categoria"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleChange}
              name="img"
              label="Url de la imagen"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Stack
          spacing={2}
          sx={{ m: 2, justifyContent: "center" }}
          direction="row"
        >
          <Button onClick={handleSubmit} variant="contained">
            Crear
          </Button>
          <Button variant="outlined">Cancelar</Button>
        </Stack>
      </Box>
    </div>
  );
};

/*<form action="" onSubmit={handleSubmit}>
<input
  type="text"
  name="name"
  placeholder="nombre del producto"
  onChange={handleChange}
/>
<input
  type="text"
  name="price"
  placeholder="precio del producto"
  onChange={handleChange}
/>
<input
  type="text"
  name="stock"
  placeholder="stock del producto"
  onChange={handleChange}
/>
<input
  type="text"
  name="description"
  placeholder="descripcion del producto"
  onChange={handleChange}
/>
<input
  type="text"
  name="category"
  placeholder="categoria del producto"
  onChange={handleChange}
/>
<input
  type="text"
  name="img"
  placeholder="url de la imagen"
  onChange={handleChange}
/>
<br />
<button style={{ marginTop: "25px" }} type="submit">
  Crear
</button>
</form>*/
