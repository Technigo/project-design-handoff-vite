import { Text } from "../component/Text";
import { Image } from "../component/Image";

export const Header = () => {
  return (
    <>
      <div className="font-rock-salt text-lx flex-col py-12 px-9 text-center">
        <h1 className="mb-4">HIIT FOR YOU</h1>
        <div className="flex justify-center mb-7">
        <Image className="" link={"/Images/logo.svg"} imgText={"red flame"} />
        </div>
        <Text
          text={
            "A new and unique studio with high-intensity interval training with over 20 professional trainers."
          }
        />
      </div>
    </>
  );
};
