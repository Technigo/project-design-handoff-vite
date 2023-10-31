import { scrollData } from "../constant/index.js";
const tags1 = scrollData[0].tags1;
const firstWord1 = tags1[0];
const remainingWords1 = tags1.slice(1).join(" • ");

const tags2 = scrollData[0].tags2;
const firstWord2 = tags2[0];
const remainingWords2 = tags2.slice(1).join(" • ");
export const Scroll1 = () => {
  return (
    <section className=" border-[6px]  border-y-lime-green border-x-0">
      <p className="w-full h-16 text-[22px] font-bold tracking-widest whitespace-nowrap  flex flex-row items-center  animate-scroll [word-spacing:16px]">
        {firstWord1}
        {remainingWords1}
      </p>
    </section>
  );
};

export const Scroll2 = () => {
  return (
    <section className=" border-[6px]  border-y-lime-green border-x-0">
      <p className="w-full h-16 text-[22px] font-bold tracking-widest whitespace-nowrap  flex flex-row items-center  animate-scroll [word-spacing:16px]">
        {firstWord2}
        {remainingWords2}
      </p>
    </section>
  );
};
