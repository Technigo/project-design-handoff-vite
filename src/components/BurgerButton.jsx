import "./burgerButton.css";

export const BurgerButton = ({ onClick, isOpen }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`burger-icon ${isOpen ? "open" : ""}`}
      onClick={handleClick}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
