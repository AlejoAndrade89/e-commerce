import { Visibility, VisibilityOff, ArrowBack } from "@mui/icons-material";
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
import "./Login.css";

export const Login = ({
  dispararAlerta,
  handleClickShowPassword,
  showPassword,
}) => {
  return (
    <div>
      <Box
        className="login-container"
        sx={{
          width: "100%",
          minHeight: "100vh",
          padding: "10px 30px",
        }}
      >
        <IconButton
          aria-label="volver"
          sx={{
            marginBottom: 2,
            bgcolor: "#f1f1f1",
            color: "#333",
            "&:hover": {
              bgcolor: "lightBlue",
            },
          }}
          onClick={() => window.history.back()}
        >
          <ArrowBack sx={{ fontSize: 40 }} />
        </IconButton>
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
