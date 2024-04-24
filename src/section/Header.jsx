import { Text } from "../component/Text";
import { Image } from "../component/Image";

export const Header = () => {
  return (
    <div className="bg-sky-900">
      <div className="flex flex-col pt-12 px-9 text-center">
        <h1 className="font-rock-salt mb-4 text-4xl text-shadow text-stroke">HIIT FOR YOU</h1>
        <div className="flex justify-center mb-7">
        <Image className="w-9 h-10" link={"/Images/logo.svg"} imgText={"red flame"} />
        </div>
        <Text className="flex font-roboto-mono font-bold mb-7"
          text={
            "A new and unique studio with high-intensity interval training with over 20 professional trainers."
          }
        />
      </div>
    </div>
  );
};
