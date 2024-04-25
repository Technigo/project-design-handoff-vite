import { Text } from "../component/Text";
import { Image } from "../component/Image";

export const Testimonial = ({ className }) => {
  return (
    <div className="container mx-auto flex flex-col items-center px-9 pb-28 md:pb-8 md:px-62 lg:text-20">
      <Image
        className={"self-center"}
        link={"/Images/star.svg"}
        imgText={"red flame"}
      />
      <Text
        className="p-2.5 font-bold text-center"
        text={` "The best workout of my life" - Marie PT" `}
      />
      <Image
        className="mt-7 object-cover md:w-full"
        link={"/Images/weights.svg"}
        alt={"people lifting weights"}
      />
    </div>
  );
};
