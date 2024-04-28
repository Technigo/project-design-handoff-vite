import imageBlob from "../assets/karate-girls-article.png";
import defaultButton from "../assets/button-join-class-default.svg";
import backgroundBlob from "/assets/background-blob.svg";

export const Article = () => {
  return (
    <section className="xs:px-4 sm:px-8 container mx-auto grid grid-rows-1 grid-cols-1 md:grid-cols-[240px_auto] lg:grid-cols-[320px_auto] gap-4 relative">
      <img
        src={imageBlob}
        alt=""
        className="object-fit md:col-start-2 md:row-start-1 md:w-full"
      />
      <div className="flex flex-col md:col-start-1 gap-2 md:gap-4">
        <h3 className="font-avengeance text-primary-darkblue text-lg lg:text-2xl xs:w-40 sm:w-56 lg:w-80">
          No doubts! Try the first class for free
        </h3>
        <p className="hidden md:flex font-urbanist text-primary-darkblue text-sm lg:text-lg w-56 md:w-60 lg:w-80">
          With a lot of fun, structure and an including atmosphere we educate
          girls to find and tame their inner dragons.
        </p>
        <p className="font-urbanist text-primary-darkblue text-sm lg:text-lg w-56 md:w-60 lg:w-80">
          Are you ready to find out if karate is your thing? We always offer the
          first class for free.
        </p>
      </div>
      <button className="absolute top-44 xs:right-4 sm:right-8 md:top-52 md:right-96 lg:right-auto lg:left-40 lg:top-64">
        <img
          src={defaultButton}
          alt="Join class"
          className="object-fit lg:w-44"
        ></img>
      </button>
      <img
        src={backgroundBlob}
        className="absolute object-none overflow-visible transform -z-10 object-center"
      ></img>
    </section>
  );
};
