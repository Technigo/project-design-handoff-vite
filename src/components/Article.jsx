import imageBlob from "../assets/karate-girls-article.png";
import defaultButton from "../assets/button-join-class-default.svg";
import backgroundBlobSmall from "/assets/background-blob-small.svg";
import backgroundBlobMedium from "/assets/background-blob-medium.svg";
import backgroundBlobLarge from "/assets/background-blob-large.svg";

export const Article = () => {
  return (
    <section className="xs:px-4 sm:px-8 relative ">
      <div className="container mx-auto grid grid-rows-1 grid-cols-1 md:grid-cols-[240px_auto] lg:grid-cols-[320px_auto] gap-4">
        <img
          src={imageBlob}
          alt="Karate girls"
          className="container mx-auto object-fit md:col-start-2 md:row-start-1 md:w-full"
        />
        <div className="relative container mx-auto flex flex-col md:col-start-1 gap-2 md:gap-4">
          <h3 className="font-avengeance text-primary-darkblue text-lg lg:text-2xl xs:w-40 sm:w-56 lg:w-80">
            No doubts! Try the first class for free
          </h3>
          <p className="hidden md:flex font-urbanist text-primary-darkblue text-sm lg:text-lg w-56 md:w-60 lg:w-80">
            With a lot of fun, structure and an including atmosphere we educate
            girls to find and tame their inner dragons.
          </p>
          <p className="font-urbanist text-primary-darkblue text-sm lg:text-lg w-56 md:w-60 lg:w-80">
            Are you ready to find out if karate is your thing? We always offer
            the first class for free.
          </p>
          <button className="absolute left-44 -top-16 sm:left-auto sm:right-0 md:top-60 lg:top-72 lg:right-12">
            <img
              src={defaultButton}
              alt="Join class"
              className="object-fit lg:w-44"
            ></img>
          </button>
        </div>
      </div>
      <picture>
        <source
          media="(min-width: 668px)"
          srcSet={backgroundBlobMedium}
          alt="Blob"
        />
        <source
          media="(min-width: 1024px)"
          srcSet={backgroundBlobLarge}
          alt="Blob"
        />
        <img
          src={backgroundBlobSmall}
          className="absolute h-full w-full top-16 md:top-24 lg:top-0 left-0 object-cover object-center overflow-visible -z-10"
        />
      </picture>
    </section>
  );
};
