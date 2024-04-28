import { Heading } from "../typography/Heading";

export const Banner = () => {
  const testimonalText = [
    "fantastic that i can bring my baby and do a workout at the same time.",
    "the best investment i’ve ever done for myself. love it!",
    "Great coaches, well-adapted exercises and a nice hangout with other mums and babies.",
  ];

  return (
    <section className="p-40 md:p-66 bg-plum-light text-white text-center md:flex md:text-left">
      {testimonalText.map((text, index) => (
        <div
          key={`heading_${index}`}
          className={`${index === 1 ? "my-4 md:my-0 px-10 md:px-40" : ""}`}
        >
          <Heading heading={"h2"} text={`“${text}“`} />
        </div>
      ))}
    </section>
  );
};
