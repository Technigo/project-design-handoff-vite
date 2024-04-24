import { GeneralButton } from '../GeneralButton';

export const UserInput = () => {
  return (
    <>
      <section className="gap[43px] grid h-[520px] w-full items-center justify-center bg-[#F8F7F3] px-[38px] py-6">
        <div className="flex w-[284px] flex-col pb-[24px] text-center font-futura font-bold">
          <h2 className="text-xl">JOIN OUR COMMUNITY</h2>
          <p className="gap-[8px] justify-self-center px-10 text-center font-avenir text-base font-medium text-black">
            Don’t miss out on free offerings, exclusive offers and new classes
            and retreats
          </p>
        </div>
        <form className="grid h-[232px] w-[280px] gap-[24px]">
          <input
            type="text"
            placeholder="First Name"
            className="h-[40px] w-[280px]  border-[1px] border-[#444446] bg-white px-[44,5px] py-[10,5px] text-center font-avenir font-medium text-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="h-[40px] w-[280px] border-[1px] border-[#444446] bg-white text-center font-avenir font-medium text-black"
          />
          <input
            type="text"
            placeholder="Email Adress"
            className="h-[40px] w-[280px] border-[1px] border-[#444446] bg-white text-center font-avenir font-medium text-black"
          />
          <GeneralButton text="Sign up" customStyle="justify-self-center" />
        </form>
      </section>
    </>
  );
};
