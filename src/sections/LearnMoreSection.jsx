import dataEn from "../data.en.json";
import dataJp from "../data.jp.json";

export const LearnMoreSection = ({ data }) => {
  return (
    <div>
      <h2>{data.heading}</h2>
      <p>{data.subheading}</p>
      <button>{data.cta}</button>
    </div>
  );
};
