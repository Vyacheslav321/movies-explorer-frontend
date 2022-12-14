import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./SearchForm.css";

function SearchForm({ inProgress }) {
  const [switchChecked, setSwitchChecked] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
  }

  function handleCheckbox() {
    console.log('switchChecked = ' + switchChecked);
    setSwitchChecked(!switchChecked);
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
        <Checkbox onChange={handleCheckbox} isChecked={switchChecked} />
      </form>
    </nav>
  );
}

export default SearchForm;
