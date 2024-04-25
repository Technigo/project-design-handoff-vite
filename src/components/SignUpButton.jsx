export const SignUpButton = ({ buttonName }) => {

  return (
    <>
      <button className="bg-main-blue hover:bg-hover-blue text-white font-montserrat w-36 tablet:w-56npm h-12 rounded-lg drop-shadow-button active:drop-shadow-none active:translate-y-1">{buttonName}</button>
    </>
  );
};
