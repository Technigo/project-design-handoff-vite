export const ButtonSecondary = ({ className, text, addedClasses }) => {
  const allClasses = `bg-aqua text-cream rounded-custom border border-blue font-bold ${className} ${addedClasses}`;
  return <button className={allClasses}>{text}</button>;
};
