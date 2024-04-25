import { Image } from "../styles/Image";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";

export const Article = () => {
  const articleContent = [
    {
      image: "/assets/images/crossfit-23.jpg",
      src: "Crossfit Mamas",
      heading: "what is crossfit mamas?",
      text: "A community with fantastic mums just like you, offering fun, challenging workouts in small groups.",
    },
    {
      image: "/assets/images/crossfit-46.jpg",
      src: "Crossfit Mamas",
      heading: "what to expect the first time",
      text: "You might be nervous, and that's normal. But don't worry, we'll guide you through it.",
    },
    {
      image: "/assets/images/unsplash_h4i9G-de7Po.jpg",
      src: "Crossfit Mamas",
      heading: "classes tailored to your needs",
      text: "Our classes are tailored for new mums and programmed by specialist coaches for safe lifting.",
    },
  ];

  return (
    <section className="p-20 md:p-66 flex justify-start overflow-x-scroll">
      {articleContent.map((article, index) => (
        <div
          key={`article_${index}`}
          className={`flex-1 ${index === 1 ? "mx-4" : ""}`}
          style={{ minWidth: "189px" }}
        >
          <Image src={article.image} alt={article.src} />
          <Heading
            heading={"h2"}
            text={article.heading}
            className={"my-[13px]"}
          />
          <Paragraph text={article.text} />
        </div>
      ))}
    </section>
  );
};
