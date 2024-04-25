export const HeaderFooter = () => {
  return (
    <>
      <div className="py-8 flex flex-row justify-around md:m-w-6x1 md:py-10">
        <div className="flex flex-col gap-2 text-center ">
          <h3 className="font-medium text-2xl">5000+</h3>
          <p className="font-inter">Aktiva medlemskap</p>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h3 className="font-medium text-2xl">410</h3>
          <p className="font-inter">Fysioterapeuter och personliga tränare</p>
        </div>
        <div className="hidden text-center md:flex flex-col gap-2">
          <h3 className="font-medium text-2xl">36</h3>
          <p className="font-inter">Anläggningar runt om i Sverige</p>
        </div>
      </div>
    </>
  );
};
