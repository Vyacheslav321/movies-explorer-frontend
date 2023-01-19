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
  const [searchKeyword, setSearchKeyword] = useState("");
  const { values, handleChange, error, isValid } = useFormWithValidation();
  const [errorMessage, setErrorMessage] = useState("");

  function handleSearchMovies(e) {
    e.preventDefault();
    localStorage.setItem("searchKeyword", values.search);
    isValid ? onSearchMovies() : setErrorMessage(error);
  }

  function handleSearchUserMovies(e) {
    e.preventDefault();
    localStorage.setItem("searchUserKeyword", values.search);
    isValid ? onSearchUserMovies() : setErrorMessage(error);
  }

  useEffect(() => {
    setErrorMessage("");
  }, [isValid]);

  useEffect(() => {
    setSearchKeyword(localStorage.getItem("searchKeyword"));
  }, []);

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
            value={values.search || searchKeyword || ""}
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
          isSavedFilms={isSavedFilms}
          handleShortMoviesChecked={handleShortMoviesChecked}
          isShortMoviesChecked={isShortMoviesChecked}
        />
        <div className="search-form__line"></div>
      </form>
    </section>
  );
}

export default SearchForm;
