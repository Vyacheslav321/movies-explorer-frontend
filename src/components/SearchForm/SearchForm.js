import { useEffect, useState } from "react";
import { useFormWithValidation } from "../../hooks/useFormValidation";

import Checkbox from "../Checkbox/Checkbox";
import "./SearchForm.css";

function SearchForm({
  isSavedFilms,
  onSearchMovies,
  onSearchUserMovies,
  handleShortMoviesChecked,
  isShortMoviesChecked,
}) {

  const { values, handleChange, error, isValid } =
    useFormWithValidation();
  const [errorMessage, setErrorMessage] = useState("");

  function handleSearchMovies(e) {
    e.preventDefault();
    isValid
      ? onSearchMovies(values.search, )
      : setErrorMessage(error);
  }

  function handleSearchUserMovies(e) {
    e.preventDefault();
    isValid
    ? onSearchUserMovies(values.search)
    : setErrorMessage(error);
  }

  useEffect(() => {
    setErrorMessage("");
  }, [isValid]);

  return (
    <section className="search-form">
      <form
        className="search-form__form"
        onSubmit={isSavedFilms ? handleSearchUserMovies : handleSearchMovies}
      >
        <fieldset className="search-form__field">
          <input
            className="search-form__input"
            id="search"
            name="search"
            type="text"
            placeholder="Фильм"
            autoComplete="off"
            pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
            onChange={handleChange}
            value={values.search || ""}
            required
          />
          <button
            className="search-form__button"
            type="submit"
            disabled={!isValid}
          ></button>
          <span className="search-form__error">
            {error.search || errorMessage}
          </span>
        </fieldset>
        <Checkbox
          handleShortMoviesChecked={handleShortMoviesChecked}
          isShortMoviesChecked={isShortMoviesChecked}
        />
        <div className="search-form__line"></div>
      </form>
    </section>
  );
}

export default SearchForm;
