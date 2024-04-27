export const Button = ({ icon, altText, btnText }) => {
  return (
    <button className="flex items-center gap-2 rounded-button border-2 border-b-4 border-yellow bg-yellowMedium px-4 py-2.5 font-heading shadow-darker hover:border-black hover:border-opacity-40 hover:bg-yellow md:py-6 lg:px-12">
      <h4 className="text-sm leading-5 text-blueDeep md:text-lg md:leading-6 lg:text-2xl">
        {btnText}
      </h4>
      <img className="h-2 md:h-4 lg:h-6" src={icon} alt={altText} />
    </button>
  );
};
