import yoga1 from "/images/yoga1.png";
import { Button } from "./Button";
export const Testimonials = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <img src={yoga1} alt="Yoga image" className="w-[60%]" />
      <div className="flex flex-col justify-center items-center border-[3px] border-blue-700 my-10">
        <h1 className="text-[28px] font-bold ">Testimonials</h1>

        <div className="border-[3px] border-pink-700 flex flex-row justify-center items-center my-5 w-[80%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            className="mr-3"
          >
            <path
              d="M4.0752 11.0002L13.2438 20.1688L14.67 18.6407L7.1314 11.0002L14.67 3.35965L13.2438 1.83154L4.0752 11.0002Z"
              fill="black"
            />
          </svg>
          <p className="text-justify">
            I love the movements and seeing my body transform before my eyes! I
            didn’t realise how much my posture could improve until I tried the
            “Posture class”.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            className="ml-3"
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
