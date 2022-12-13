import "./SearchForm.css";

function SearchForm({inProgress}) {
function handleSearch(e) {
  e.preventDefault();
}

  return (
    <nav className="search-form">
      <form className="search-form__form" onSubmit={handleSearch}>
        <input
          className="search-form__input"
          id="search"
          name="search"
          type="text"
          placeholder="Фильм"
          required
          disabled={inProgress}
          // value={Фильм}
        ></input>
      <label className="search-form__checkbox">
        <input
          type="checkbox"
          className="search-form__checkbox-switcher"
          // onChange=""
        >
          Короткометражки
        </input>
      </label>
      </form>
    </nav>
  );
}

export default SearchForm;
