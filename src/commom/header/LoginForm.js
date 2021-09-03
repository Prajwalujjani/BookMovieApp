import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./LoginResgisterForm.css";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validationError, setvalidationError] = useState({
    email: false,
    password: false,
  });

  function Login() {
    const validationErrorValues = { ...validationError }; //e:false, p:false

    if (email === "") {
      validationErrorValues.email = true; //e:true, p:false
    }
    if (password === "") {
      validationErrorValues.password = true; //e:true, p:true
    }
    if (validationErrorValues.email || validationErrorValues.password) {
      setvalidationError(validationErrorValues);
      return;
    }

    const authorization = window.btoa(email + ":" + password);
    const headers = {
      Accept: "application/json;charset=UTF-8",
      authorization: "Basic " + authorization,
    };

    fetch(props.baseUrl + "auth/login", {
      method: "POST",
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ACTIVE") {
          const userDetails = { data, loginStatus: true };
          localStorage.setItem("userDetails", JSON.stringify(userDetails));
          props.setLoginStatus(true);
          props.setIsOpen(false);
        }
      });
  }

  function resetValidationError(fieldName) {
    const validationErrorValues = { ...validationError };
    validationErrorValues[fieldName] = false;
    setvalidationError(validationErrorValues);
  }

  return (
    <div className="center">
      <form>
        <TextField
          required
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            resetValidationError("email");
          }}
          error={validationError.email}
          helperText={validationError.email ? "Required" : ""}
          value={email}
        />
        <br />

        <TextField
          type="password"
          label="Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
            resetValidationError("password");
          }}
          error={validationError.password}
          helperText={validationError.password ? "Required" : ""}
          value={password}
        />
        <br />
        <br />
        <br />
      </form>

      <Button onClick={Login} variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
}

export default LoginForm;
