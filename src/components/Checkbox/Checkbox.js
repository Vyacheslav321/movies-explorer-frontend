import "./Checkbox.css";

function Checkbox({ onChange, isChecked }) {
  return (
    <label className="check-box text__normal text__white">
      <input
        type="checkbox"
        className="check-box__switcher"
        onChange={onChange}
        checked={isChecked}
      />
      Короткометражки
    </label>
  );
}

export default Checkbox;
