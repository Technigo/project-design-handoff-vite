export const ValueHeader = ({ valueHeaderSmall, valueHeaderBig }) => {
  return (
    <div>
      <h5 className="ubuntu text-white sm:text-lg md:text-lg lg:text-6xl">
        <span className="inline md:hidden lg:hidden">{valueHeaderSmall}</span>
        <span className="hidden md:inline lg:inline">{valueHeaderBig}</span>
      </h5>
    </div>
  );
};
