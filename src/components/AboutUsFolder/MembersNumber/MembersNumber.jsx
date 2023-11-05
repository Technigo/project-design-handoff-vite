import "./MembersNumber.css";

export const MembersNumber = () => {
  const numbersArray = [
    {
      number: "350",
      text: "Centres all over scandinavia",
    },
    {
      number: "500 000",
      text: "Members",
    },
    {
      number: "1 500",
      text: "Varied group classes",
    },
  ];

  return (
    <div className="grid-parent dark-blue">
      <div className="numbers section">
        {numbersArray.map((item, index) => (
          <div className="numbers-container" key={index}>
            <p className="number-number">{item.number}</p>
            <p className="number-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
