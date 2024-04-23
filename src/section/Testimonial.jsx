import { Text } from "../component/Text";
import { Image } from "../component/Image";

export const Testimonial = () => {
  return (
    <>
      <Image link={"../public/star.svg"} imgText={"red flame"} />
      <Text text={` "The best workout of my life" - Marie PT" `} />
    </>
  );
};
