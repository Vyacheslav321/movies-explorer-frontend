import "./Checkbox.css";

function Checkbox({ onChange, isChecked }) {
  return (
    <label className="check-box">
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
