export const FeatureCard = ({ feature }) => {
  console.log(feature);
  return (
    <div>
      <img src="src/assets/images/distance-working.png" />
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
};
