import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./SearchForm.css";

function SearchForm({ inProgress }) {
  const [switchChecked, setSwitchChecked] = useState(true);

  function handleSearch(e) {
    e.preventDefault();
  }

  function handleCheckbox() {
    setSwitchChecked(!switchChecked);
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSearch}>
        <fieldset className="search-form__field">
          <input
            className="search-form__input"
            id="search"
            name="search"
            type="text"
            placeholder="Фильм"
            required
            disabled={inProgress}
            // value={Фильм || ''}
          />
          <button className="search-form__button" type="submit"></button>
        </fieldset>

        <Checkbox onChange={handleCheckbox} isChecked={switchChecked} />
        <div className="search-form__line"></div>
      </form>
    </section>
  );
}

export default SearchForm;
