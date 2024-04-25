import waveDesktop from "../assets/testimonials/wave-desktop.svg";

export const Testimonials = () => {
  return (
    <div className="h-40 bg-primary-greyblue">
      {/* <div className="">
        <img
          src={waveDesktop}
          className="size-full"
          // style={{ width: "100%", height: "auto", maxWidth: "none" }}
        />
      </div> */}
      <ul className=" font-urbanistitalic text-primary-darkblue text-lg inset-4 flex text-center items-center gap-8 lg:text-2xl size-full">
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
