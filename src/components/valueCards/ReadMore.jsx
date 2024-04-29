import { Arrow } from "./Arrow";
export const ReadMore = () => {
  return (
    <div className="flex flex-row items-center sm:gap-[11px] sm:self-end md:justify-end md:gap-[20px] ">
      <p className="ubuntu sm:text-8xl md:text-9xl text-yellow lg:text-lg">
        Read more about it{" "}
      </p>{" "}
      <Arrow />
    </div>
  );
};