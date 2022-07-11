import React, { useState, useEffect } from "react";

// Initial value of the form set to null
const FormPreview = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    landlineNumber: "",
    password: "",
    repassword: "",
  });

  //Error Messages
  const [error, setError] = useState({
    firstNameError: "First name is required",
    lastNameError: "Last name is required",
    emailError: "Email is required",
    phoneNumberError: "Phone number is required",
    landlineNumberError: "Landline number is required",
    passwordError: "Password is required",
    repasswordError: "Re-enter password",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    // if (values.firstName.length > 5) {
    //   console.log("Hello World");
    // }
  };

  useEffect(() => {
    if (values.firstName.length > 5) {
      error.firstNameError = "Hello World 2";
      console.log(error.firstNameError);
    }
  }, [values, error]);

  const display = (value) => {
    document.getElementById("verdict").innerHTML = "Input received";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>First Name: </label>
        <input
          id="first_name"
          type="text"
          name="firstName"
          value={values.firstName}
          onChange="display(this)"
        />
        <p id="verdict"></p>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default FormPreview;
