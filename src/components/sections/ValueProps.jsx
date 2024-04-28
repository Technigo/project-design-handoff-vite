import { Button } from "../styles/Button"
import { Paragraph } from "../typography/Paragraph"
import { Heading } from "../typography/Heading"
import imageOne from "/assets/images/crossfit-45.jpg"
import imageTwo from "/assets/images/crossfit-baby.png"
import imageThree from "/assets/images/crossfit-53.png"
import kettlebell from "/assets/icons/kettlebell.svg"

export const ValueProps = () => {
  return (
    <section className="relative bg-crimson-light pt-8 pr-40 pl-40 pb-10 grid grid-cols-1 lg:overflow-hidden">
      <img
        src={kettlebell}
        alt="Kettlebell icon"
        className="hidden lg:block absolute bottom-0 right-0 z-10"
        style={{
          transform: "translateX(40%)",
          width: "80%",
          clipPath: "inset(0 40% 0 0)",
        }}
      />
      <Heading
        heading="h2"
        className="text-h2-tab-mob mt-10 mb-10 md:justify-self-start lg:text-h2-desktop justify-self-center text-center md:text-left lg:text-left"
        text="why crossfit mamas?"
      />

      <div className="sm:grid grid-cols-2 gap-5 md:gap-10 lg:w-2/3 sm:mb-8 md:mb-12">
        <div className="sm:items-start">
          <img
            src={imageOne}
            alt="Woman doing lats"
            className="mb-4  sm:m-0 lg:w-full"
          />
        </div>
        <div className="flex flex-col justify-start items-center sm:items-start">
          <Heading
            heading="h3"
            className="text-h3-tab-mob lg:text-h3-desktop"
            text="progress, not perfection"
          />
          <Paragraph
            className="hidden sm:block md:block lg:block lg:text-pl-desktop mb-5 mt-2"
            text="We know it may feel a bit daunting. But relax. You’re here to learn
            and we’ve got your back."
          />
          <Button
            className={
              "px-10 py-7 w-36 h-10 mt-1 text-value-props-btn-mob text-white md:text-value-props-btn lg:text-value-props-btn bg-plum-light hover:bg-royal-purple active:bg-deep-violet text-button"
            }
            label={"our philosophy"}
          />
        </div>
      </div>

      <div className="sm:grid grid-cols-2 gap-5 justify-start md:gap-10 lg:w-2/3 sm:mb-8 md:mb-12">
        <div className="sm:items-start">
          <img
            src={imageTwo}
            alt="Mom with her baby in the gym"
            className="mt-10 mb-4 sm:m-0 lg:w-full"
          />
        </div>
        <div className="flex flex-col justify-start items-center sm:items-start">
          <Heading
            heading="h3"
            className="text-h3-tab-mob lg:text-h3-desktop"
            text="mum coaches only"
          />
          <Paragraph
            className="hidden sm:block md:block lg:block lg:text-pl-desktop lg:mt-3 mb-5 mt-2 lg:w-56"
            text="We’re here for you. This is your community of like-minded mamas and
            coaches who know what you’re going through."
          />
          <Button
            className={
              "px-10 py-7 w-36 h-10 mt-1 text-value-props-btn-mob text-white md:text-value-props-btn lg:text-value-props-btn bg-plum-light hover:bg-royal-purple active:bg-deep-violet text-button lg:mt-0"
            }
            label={"meet your coaches"}
          />
        </div>
      </div>

      <div className="sm:grid grid-cols-2 gap-5 md:gap-10 lg:w-2/3 md:mb-12">
        <div className="sm:items-start">
          <img
            src={imageThree}
            alt="A mom and baby in the gym"
            className="mt-10 mb-4 sm:m-0 lg:w-full"
          />
        </div>
        <div className="flex flex-col justify-start items-center sm:items-start">
          <Heading
            heading="h3"
            className="text-h3-tab-mob lg:text-h3-desktop"
            text="safe for you & your baby"
          />
          <Paragraph
            className="hidden sm:block md:block lg:block lg:text-pl-desktop mb-5 mt-2 lg:max-w-48"
            text="It doesn’t matter how old your baby is, he or she is always welcome and we’ve got the whole gym to ourselves."
          />
          <Button
            className={
              "px-10 py-7 w-36 h-10 mt-1 mb-12 text-value-props-btn-mob text-white md:text-value-props-btn lg:text-value-props-btn bg-plum-light hover:bg-royal-purple active:bg-deep-violet text-button"
            }
            label={"learn more"}
          />
        </div>
      </div>
    </section>
  )
}
