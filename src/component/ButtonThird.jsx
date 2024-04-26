
export const ButtonThird = ({ text, addedClasses }) => {
  // const allClasses = `bg-aqua text-cream rounded-full p-2.5 w-custom-width h-custom-height border border-blue text-sm font-bold ${className} ${addedClasses}`;
  return (
  <button className={`bg-aqua text-cream rounded-full p-2.5 w-custom-width h-custom-height border border-blue text-sm font-bold ${addedClasses}`}>{text}</button>
  )
};
