export const UserInput = () => {
  return (
    <>
      <section className="place-content-center gap[43px] grid h-[474px] w-full bg-[#F8F7F3] px-[38px] py-[48px]">
        <div className="h-auto w-[284px] px-[11px] pb-[24px] pt-[64px] text-center font-futura text-xl font-bold">
          <h2 className="h-[29px] w-[284px]">JOIN OUR COMMUNITY</h2>
          <p className="h-[66px] w-[211px] gap-[8px] text-center font-avenir text-base font-medium text-black">
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
        </form>
      </section>
    </>
  );
};
