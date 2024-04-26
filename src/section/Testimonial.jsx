import { Text } from "../component/Text";
import { Image } from "../component/Image";

export const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-9 pb-28 md:gap-8 md:px-62 md:pb-8 lg:text-20">
      <Image
        className="self-center"
        link={"/Images/star.svg"}
        imgText={"red flame"}
      />
      <Text
        className="p-2.5 text-center font-bold"
        text={` "The best workout of my life" - Marie PT" `}
      />
      <Image
        className="mt-7 h-height-two w-width-two object-cover md:mt-0 md:h-height-four md:width-width-three md:w-full"
        link={"/Images/weights.svg"}
        alt={"people lifting weights"}
      />
    </div>
  );
};
