export const HeaderFooter = () => {
  return (
    <>
      <div className="py-8 flex flex-row justify-around md:m-w-6x1 md:py-10">
        <div className="flex flex-col gap-2 text-center ">
          <h3 className="font-medium font-zilla text-2xl text-neutralDark">
            5000+
          </h3>
          <p className="font-inter text-neutralDark">Aktiva medlemskap</p>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h3 className="font-medium font-zilla text-2xl text-neutralDark">
            410
          </h3>
          <p className="font-inter text-neutralDark">
            Fysioterapeuter och personliga tränare
          </p>
        </div>
        <div className="hidden text-center md:flex flex-col gap-2">
          <h3 className="font-medium font-zilla text-2xl text-neutralDark">
            36
          </h3>
          <p className="font-inter text-neutralDark">
            Anläggningar runt om i Sverige
          </p>
        </div>
      </div>
    </>
  );
};
