import "./Button.css";

export const Button = ({ label, className }) => {
  return <button className={`${className || ""}`}>{label}</button>;
};
