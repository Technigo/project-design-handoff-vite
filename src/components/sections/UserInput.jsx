import { GeneralButton } from '../GeneralButton';

export const UserInput = () => {
  return (
    <>
      <section className="grid w-full items-center justify-center justify-items-center bg-[#F8F7F3] px-[38px] py-20">
        <div className="flex max-w-96 flex-col pb-[24px] text-center font-futura font-bold xl:mt-20 xl:max-w-max">
          <h2 className="font-futura text-xl font-bold md:text-2xl xl:text-4xl">
            JOIN OUR COMMUNITY
          </h2>
          <p className=" justify-self-center px-10 pt-6 text-center font-avenir text-base font-medium text-black">
            Don’t miss out on free offerings, exclusive offers and new classes
            and retreats
          </p>
        </div>
        <form
          className="grid place-items-center gap-8 xl:mb-12 xl:mt-8 xl:flex"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="First Name"
            className="h-[40px] border-[1px] border-[#444446] bg-white  text-center font-avenir font-medium text-black xl:w-56"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="h-[40px] border-[1px] border-[#444446] bg-white text-center font-avenir font-medium text-black xl:w-56"
          />
          <input
            type="text"
            placeholder="Email Adress"
            className="h-[40px] border-[1px] border-[#444446] bg-white text-center font-avenir font-medium text-black xl:w-56"
          />
          <GeneralButton text="Join us" customStyle="justify-self-center" />
        </form>
      </section>
    </>
  );
};
