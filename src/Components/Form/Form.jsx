import { Visibility, VisibilityOff } from "@mui/icons-material";
import Swal from "sweetalert2";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  OutlinedInput,
  TextField,
  InputAdornment,
  InputLabel,
  Stack,
  Button,
} from "@mui/material";
import React, { useState } from "react";

export const Form = () => {
  const dispararAlerta = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          padding: "10px 30px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Ingresa tu email" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff color="primary" />
                      ) : (
                        <Visibility color="primary" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Stack spacing={2} sx={{ m: 1 }} direction="row">
          <Button onClick={dispararAlerta} variant="contained">
            Ingresar
          </Button>
          <Button variant="outlined">Cancelar</Button>
        </Stack>
      </Box>
    </div>
  );
};
