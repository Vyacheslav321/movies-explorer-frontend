import "./Checkbox.css";

function Checkbox({ handleShortMoviesChecked, isShortMoviesChecked }) {
function handleCheck(e) {
  handleShortMoviesChecked(e);
}

  return (
    <label className="check-box" htmlFor="checkbox">
      <input
      id='checkbox'
        type="checkbox"
        className="check-box__switcher"
        onChange={handleCheck}
        checked={isShortMoviesChecked}
      />
      Короткометражки
    </label>
  );
}

export default Checkbox;
