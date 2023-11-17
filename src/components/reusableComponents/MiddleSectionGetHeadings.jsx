export const MiddleSectionGetHeadings = ({
  middleSectionGetHeading,
  style,
}) => {
  const sectionStyle =
    "text-grey text-3xl font-medium font-raleway absolute z-15 " + style;
  return <div className={sectionStyle}>{middleSectionGetHeading}</div>;
};
