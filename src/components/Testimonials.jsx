import yoga1 from "/images/yoga1.png";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";
export const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col justify-center items-center my-10 md:flex-row lg:h-[77vh] lg:items-start">
      <img
        src={yoga1}
        alt="Yoga image"
        className="w-[20rem] md:w-[21rem] md:ml-10 lg:w-[34rem] lg:ml-6 lg:h-[46rem] lg:z-10 "
      />
      <div className="flex flex-col justify-center items-center my-10 lg:mt-10 lg:mx-3">
        <h1 className="text-[28px] font-bold md:text-[40px] lg:text-[70px]">
          {t("testimonials.h1")}
        </h1>

        <div className=" flex flex-row justify-center items-center my-5 w-[80%]lg:mb-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            className="mr-3 md:w-[50px]"
          >
            <path
              d="M4.0752 11.0002L13.2438 20.1688L14.67 18.6407L7.1314 11.0002L14.67 3.35965L13.2438 1.83154L4.0752 11.0002Z"
              fill="black"
            />
          </svg>
          <p className="text-justify italic font-light text-base md:text-xl lg:text-[30px] lg:leading-10">
            {t("testimonials.p")}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            className="ml-6 md:w-[50px]"
          >
            <path
              d="M16.6743 11.0001L7.5057 1.83146L6.07947 3.35957L13.6181 11.0001L6.07947 18.6406L7.5057 20.1687L16.6743 11.0001Z"
              fill="black"
            />
          </svg>
        </div>
        <Button />
      </div>
    </section>
  );
};
