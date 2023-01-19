import { useCallback, useState } from "react";

export function useFormWithValidation() {
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState({});
  const [error, setError] = useState({});

  function handleChange(e) {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    if (name === 'name' && input.validity.patternMismatch) {
      input.setCustomValidity('Имя должно содержать только латиницу, кириллицу, пробел или дефис.')
    } else {
      input.setCustomValidity('');
    }
    setValues({ ...values, [name]: value });
    setError({ ...error, [name]: input.validationMessage });
    setIsValid(input.closest("form").checkValidity());
  }
  
  const resetForm = useCallback(
    (newValues = {}, newError = {}, newIsValid = false) => { // cброс формы, полей, ошибок
      setValues(newValues);
      setError(newError);
      setIsValid(newIsValid);
    },
    [setValues, setError, setIsValid]
  );

  return { values, setValues, handleChange, error, isValid, resetForm, setIsValid };
}