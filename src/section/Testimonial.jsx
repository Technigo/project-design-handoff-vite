import { Text } from "../component/Text";
import { Image } from "../component/Image";

export const Testimonial = ({ className }) => {
  return (
    <div className="container mx-auto flex flex-col items-center px-9 bg-blue">
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
        className="mt-7 w-361 h-376 object-fill md:w-full"
        link={"/Images/weights.svg"}
        alt={"people lifting weights"}
      />
    </div>
  );
};
