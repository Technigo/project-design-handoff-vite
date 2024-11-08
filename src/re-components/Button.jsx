// export const Button = ({ link, text, icon, onClick }) => {

//   return (
//     <button 
//       onClick={onClick}>
//       {icon && <img src={icon} alt={`${text}icon`} /> }
//       {text}
//     </button>
//   );
// };

export const Button = ({
  text,
  icon,
  link,
  onClick,
}) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <button
      onClick={onClick || handleClick}
    >
      <span>{text}</span>
      <img
        src={icon}
        aria-hidden="true" // Hide the icon from assistive technologies
      />
      
    </button>
  );
};