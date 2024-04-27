import {DotIcon} from "./DotIcon"

export const Dots = () => {
  return (
    <div className="flex flex-row sm:gap-x-[6px] md:gap-x-[15px] pt-1">
      <DotIcon />
      <DotIcon />
      <DotIcon />
    </div>
  );
}