import "./Button.css";

export const Button = ({ label, classNames }) => {
  return <button className={`${classNames || ""}`}>{label}</button>;
};
