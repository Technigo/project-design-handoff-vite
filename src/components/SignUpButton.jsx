export const SignUpButton = ({ buttonName }) => {
  return (
    <>
      <button className="bg-main-blue hover:bg-hover-blue text-white hover:duration-300 active:duration-75 font-montserrat w-36 tablet:w-56 h-12 rounded-lg drop-shadow-button active:drop-shadow-none active:translate-y-1 desktop:h-16">
        {buttonName}
      </button>
    </>
  );
};
