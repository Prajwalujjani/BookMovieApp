import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./LoginResgisterForm.css";

function RegisterForm(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactno, setContactno] = useState("");

  const [validationError, setvalidationError] = useState({
    firstname: false,
    lastname: false,
    email: false,
    password: false,
    contactno: false,
  });

  function Register() {
    const validationErrorValues = { ...validationError };

    if (firstname === "") {
      validationErrorValues.firstname = true;
    }
    if (lastname === "") {
      validationErrorValues.lastname = true;
    }
    if (email === "") {
      validationErrorValues.email = true;
    }
    if (password === "") {
      validationErrorValues.password = true;
    }
    if (contactno === "") {
      validationErrorValues.contactno = true;
    }

    if (
      validationErrorValues.firstname ||
      validationErrorValues.lastname ||
      validationErrorValues.email ||
      validationErrorValues.password ||
      validationErrorValues.contactno
    ) {
      setvalidationError(validationErrorValues);
      return;
    }

    console.warn(firstname, lastname, email, password, contactno);
    const data = {
      email_address: email,
      first_name: firstname,
      last_name: lastname,
      mobile_number: contactno,
      password: password,
    };

    fetch(props.baseUrl + "signup", {
      method: "POST",
      headers: {
        Accept: "application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        //setBookingId(data.reference_number);
        const userDetails = { data, loginStatus: true };
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        props.setLoginStatus(true);
        props.setIsOpen(false);
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
          label="First Name"
          onChange={(e) => {
            setFirstname(e.target.value);
            resetValidationError("firstname");
          }}
          error={validationError.firstname}
          helperText={validationError.firstname ? "Required" : ""}
          value={firstname}
          required
        />
        <br />
        <TextField
          label="Last Name"
          onChange={(e) => {
            setLastname(e.target.value);
            resetValidationError("lastname");
          }}
          error={validationError.lastname}
          helperText={validationError.lastname ? "Required" : ""}
          value={lastname}
          required
        />
        <br />
        <TextField
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            resetValidationError("email");
          }}
          error={validationError.email}
          helperText={validationError.email ? "Required" : ""}
          value={email}
          required
        />
        <br />
        <TextField
          label="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            resetValidationError("password");
          }}
          value={password}
          error={validationError.password}
          helperText={validationError.password ? "Required" : ""}
          required
        />
        <br />
        <TextField
          label="Contact No"
          onChange={(e) => {
            setContactno(e.target.value);
            resetValidationError("contactno");
          }}
          error={validationError.contactno}
          helperText={validationError.contactno ? "Required" : ""}
          value={contactno}
          required
        />
        <br />
        <br />
        <br />
        <br />
      </form>
      <Button onClick={Register} variant="contained" color="primary">
        Register
      </Button>
    </div>
  );
}

export default RegisterForm;
