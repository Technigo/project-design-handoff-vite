export const ButtonSecondary = ({ className, text, addedClasses }) => {
  const allClasses = `bg-aqua text-cream rounded-custom p-6 border border-blue ${className} ${addedClasses}`;
  return (
  <button className={allClasses}>{text}</button>
  )
};
