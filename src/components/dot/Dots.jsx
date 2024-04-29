import {DotIcon} from "./DotIcon"

export const Dots = () => {
  return (
    <div className="flex flex-row justify-center align-center gap-x-[6px] md:gap-x-[15px] pt-1 lg:hidden">
      <DotIcon />
      <DotIcon />
      <DotIcon />
    </div>
  );
}