import { Text } from "../component/Text";
import { Image } from "../component/Image";

export const Testimonial = ({ className }) => {
  return (
    <div className="flex flex-col items-center mx-9">
      <Image
        className={"self-center"}
        link={"/Images/star.svg"}
        imgText={"red flame"}
      />
      <Text
        className="pt-2.5 font-bold text-center"
        text={` "The best workout of my life" - Marie PT" `}
      />
      <Image className="mt-7 h-376 w-361" link={"/Images/weights.svg"} alt={"people lifting weights"}/>
    </div>
  );
};





