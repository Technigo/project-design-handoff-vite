import { Text } from "../component/Text";
import { Image } from "../component/Image";

export const Header = () => {
  return (
    <div className="flex flex-col px-9 pt-11 text-center md:px-16 xl:mx-117 xl:px-0 2xl:mx-117 2xl:px-0">
      <h1 className="text-shadow text-stroke  mb-4 font-rock-salt text-4xl md:text-42 lg:mb-0 lg:p-2.5 lg:text-60">
        HIIT FOR YOU
      </h1>
      <div className="mb-7 flex justify-center md:my-0">
        <Image
          className="h-10 w-9 md:mb-8 lg:m-2.5 lg:mb-35"
          link={"/Images/logo.svg"}
          imgText={"red flame"}
        />
      </div>
      <Text
        className="mb-7 flex font-roboto-mono font-bold sm:p-2.5 md:mb-8 lg:mb-35 lg:justify-center lg:text-20"
        text={
          "A new and unique studio with high-intensity interval training with over 20 professional trainers."
        }
      />
    </div>
  );
};
