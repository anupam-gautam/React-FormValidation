import React, { useState } from "react";

export const FormDisplay = () => {
  const intialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [valid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //short-hand propety
    //return garda k bhairacha tyo pani herney
    //use less if-else
    //switch case MAYBE??
    if (!values.username) errors.username = "Username is required";

    if (!values.email) errors.email = "Email is required";
    else if (!regex.test(values.email))
      errors.email = "This email is not in valid format";

    if (!values.password) errors.password = "Password is required";
    else if (values.password.length < 4)
      errors.password = "This password must be morem than 4 characters";
    else if (values.password.length > 10)
      errors.password = "This password must be less than 10 characters";
    else setIsValid(true);
    return errors;
  };

  return (
    <div>
      {isSubmit && valid && (
        <div className="success-message">
          <p>Form is successfully validated</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="username">
          <label>Username: </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <p>{formErrors.username}</p>
        </div>
        <div className="email">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Username"
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
        </div>
        <div className="password">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <p>{formErrors.password}</p>
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

//input lai seperate componenet banayera props pass and do to make code better
