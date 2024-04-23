import { Text } from "../component/Text";
import { Image } from "../component/Image";

export const Header = () => {
  return (
    <>
      <div className="font-rock-salt text-lx">HIIT FOR YOU</div>
      <Image link={"../public/logo.svg"} imgText={"red flame"} />
      <Text
        text={
          "A new and unique studio with high-intensity interval training with over 20 professional trainers."}
      />
      
    </>
  );
};
