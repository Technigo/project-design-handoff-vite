import { Text } from "../component/Text";
import { Image } from "../component/Image";

export const Header = () => {
  return (
    // <div className="bg-blue">
      <div className="bg-blue flex flex-col px-9 pt-11 text-center md:px-16 xl:mx-117 xl:px-0 2xl:px-0 2xl:mx-117">

        <h1 className="font-rock-salt mb-4  lg:mb-0 text-4xl md:text-42 lg:text-60 lg:p-2.5 text-shadow text-stroke">HIIT FOR YOU</h1>

        <div className="flex justify-center mb-7 md:my-0">
        <Image className="w-9 h-10 md:mb-8 lg:m-2.5 lg:mb-35" link={"/Images/logo.svg"} imgText={"red flame"} />
        </div>

        <Text className="flex font-roboto-mono font-bold mb-7 md:mb-8 lg:text-20 lg:mb-35 lg:justify-center"
          text={
            "A new and unique studio with high-intensity interval training with over 20 professional trainers."
          }
        />
      </div>
    // </div>
  );
};
