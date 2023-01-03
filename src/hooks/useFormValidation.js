import React from "react";

export function useFormWithValidation() {
  const [isValid, setIsValid] = React.useState(false);
  const [values, setValues] = React.useState({});
  const [error, setError] = React.useState({});

  function handleChange(e) {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setValues({ ...values, [name]: value });
    setError({ ...error, [name]: input.validationMessage });
    setIsValid(input.closest("form").checkValidity());
  }

  return { values, setValues, handleChange, error, isValid };
}
