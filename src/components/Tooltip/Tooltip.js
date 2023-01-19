import useEscPress from "../../hooks/useEscKey";

import "../App/App.css";
import "./Tooltip.css";
import good from "../../images/infiToolTip__Good.png";
import bad from "../../images/infiToolTip__Bad.png";

function Tooltip({
  tooltip: { isPopupOpen, message, successful },
  handleTooltip,
}) {
  function handleTooltipClick(e) {
    e.stopPropagation();
  }

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      handleCloseTooltip();
    }
  };

  function handleCloseTooltip() {
    handleTooltip({
      isPopupOpen: false,
      message: '',
      successful: false,
    });
  }

  useEscPress(handleCloseTooltip, isPopupOpen);

  return (
    <div
      className={`tooltip ${isPopupOpen ? "tooltip_open" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="tooltip__container" onClick={handleTooltipClick}>
        <button
          className="tooltip__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={handleCloseTooltip}
        ></button>
        <img
          className="tooltip__info-icon"
          src={successful ? good : bad}
          alt={successful ? "Успех" : "Ошибка"}
        />
        <h2 className="tooltip__text">{`${message}`}</h2>
      </div>
    </div>
  );
}

export default Tooltip;
