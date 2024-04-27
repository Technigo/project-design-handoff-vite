import { Button } from "../components/Button";

export const Booking = () => {
  return (
    <section className="flex w-screen flex-col gap-8 px-8 py-16 font-heading text-2xl text-blue sm:p-16 md:px-16 lg:px-32 lg:py-24">
      <h3 className="px-4 py-8 font-heading text-xl font-medium leading-8 md:px-8 md:text-font26 md:leading-10 lg:p-16">
        Your path to a healthier lifestyle starts here! Take your first step to
        feeling inner balance and peace.
      </h3>
      <div className="flex flex-grow items-end justify-end">
        <Button
          icon={"/icons/arrow_l.svg"}
          altText={"arrow"}
          btnText={"Continue to Book"}
        />
      </div>
    </section>
  );
};
