export const ValuePropsCard = ({ subtitle, title, description, image }) => {
  return (
    <div>
      <img src={image}></img>
      <h4>{subtitle}</h4>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
