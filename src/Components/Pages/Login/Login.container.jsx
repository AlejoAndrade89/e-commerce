import React, { useState } from "react";
import Swal from "sweetalert2";
import { Login } from "./Login";

export const LoginContainer = () => {
  const dispararAlerta = () => {
    Swal.fire({
      position: "top",
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
      <Login
        handleClickShowPassword={handleClickShowPassword}
        dispararAlerta={dispararAlerta}
        showPassword={showPassword}
      />
    </div>
  );
};
