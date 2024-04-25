import { Text } from "../component/Text";
import { Image } from "../component/Image";

export const Header = () => {
  return (
    <div className="bg-blue container mx-auto">
      <div className="flex flex-col p-t-12 lg: pt-10 px-9 text-center">
        <h1 className="font-rock-salt mb-4 md:mb-5 lg:mb-0 text-4xl md:text-42 md:pt-8 lg:text-60 lg:p-2.5 text-shadow text-stroke">HIIT FOR YOU</h1>
        <div className="flex justify-center mb-7 md:mb-8">
        <Image className="w-9 h-10 lg:m-2.5" link={"/Images/logo.svg"} imgText={"red flame"} />
        </div>
        <Text className="flex font-roboto-mono font-bold mb-7 md:mb-8 md:pt-2.5 lg:text-20 lg:mb-25 lg:justify-center"
          text={
            "A new and unique studio with high-intensity interval training with over 20 professional trainers."
          }
        />
      </div>
    </div>
  );
};
