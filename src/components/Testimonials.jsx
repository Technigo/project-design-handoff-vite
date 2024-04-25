import waveMobile from "../assets/testimonials/wave-mobile.svg";

export const Testimonials = () => {
  return (
    <div className="relative">
      <img src={waveMobile} className=""></img>
      <ul className="font-urbanistitalic text-primary-darkblue text-lg absolute inset-4 flex text-center gap-8">
        <li>
          <p>11 clubs in 7 cities within the Nordic region</p>
        </li>
        <li>
          <p>Winner of 2021 Best Sport Intiative for Kids </p>
        </li>
        <li>
          <p>Part or the JKA Sweden Group</p>
        </li>
        <li>
          <p>First Kids sport offerng an app solution </p>
        </li>
      </ul>
    </div>
  );
};
