
export const Buttons = ({ buttonList}) => {
  return (
    <div className="button-list">
      {buttonList.map((button, index) => (
        <button key={index} onClick={() => console.log(button.buttonText)}>
          {button.buttonText}
        </button>
      ))}
    </div>
  );
};


