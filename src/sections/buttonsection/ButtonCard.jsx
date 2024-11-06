// Button.jsx
import linksData from "../../data/links.json";

export const Button = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      {linksData.links.map((linkItem) => (
        <button key={linkItem.name} onClick={() => handleClick(linkItem.link)}>
          <img src={linkItem.icon} alt={`${linkItem.name} icon`} />
          {linkItem.text || "Start today"}
        </button>
      ))}
    </div>
  );
};
