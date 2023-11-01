import "./typography.css";

export const H1_Headline = ({ h1_headline, className }) => {
  return (
    <h1 className={`h1-headline ${className}`}>
      {h1_headline}
    </h1>
  );
}


