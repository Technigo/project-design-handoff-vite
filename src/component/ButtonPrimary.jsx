export const ButtonPrimary = ({ className, text, addedClasses }) => {
  const allClasses = `bg-cream text-blue rounded-lg border border-black shadow-custom-btn-p ${className} ${addedClasses}`;
  return (
  <button className={allClasses}>{text}</button>
  )
};
