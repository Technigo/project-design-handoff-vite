import parking from "../assets/icons/parking.png";
import food from "../assets/icons/food.png";
import gym from "../assets/icons/gym.png";
import wifi from "../assets/icons/wifi.png";

export const InfoIcons = ({ icon, index }) => {

  console.log("Info Icons: ", icon);
      console.log("Info index: ", index);

  let img = "";
  if (
    icon.name.toLowerCase() === "food" ||
    icon.name.toLowerCase() === "ランチ"
  ) {
    img = food;
  }
    if (
      icon.name.toLowerCase() === "parking" ||
      icon.name.toLowerCase() === "パーキング有"
    ) {
      img = parking;
    }
      if (
        icon.name.toLowerCase() === "gym" ||
        icon.name.toLowerCase() === "ジム"
      ) {
        img = gym;
      }
      if (
        icon.name.toLowerCase() === "co-working" ||
        icon.name.toLowerCase() === "オフィス"
      ) {
        img = wifi;
      }
  
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <img src={img} className="w-10 h-10 object-contain" />
      <p className="whitespace-nowrap">{ icon.name}</p>
    </div>
  )
}
