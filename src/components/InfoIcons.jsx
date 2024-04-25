export const InfoIcons = ({ icon, index }) => {

  console.log("Info Icons: ", icon);
      console.log("Info index: ", index);

  let img = "";
  if (
    icon.name.toLowerCase() === "food" ||
    icon.name.toLowerCase() === "ランチ"
  ) {
    img = "src/assets/icons/food.png";
  }
    if (
      icon.name.toLowerCase() === "parking" ||
      icon.name.toLowerCase() === "パーキング有"
    ) {
      img = "src/assets/icons/parking.png";
    }
      if (
        icon.name.toLowerCase() === "gym" ||
        icon.name.toLowerCase() === "ジム"
      ) {
        img = "src/assets/icons/gym.png";
      }
      if (
        icon.name.toLowerCase() === "co-working" ||
        icon.name.toLowerCase() === "オフィス"
      ) {
        img = "src/assets/icons/wifi.png";
      }
  
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <img src={img} className="w-10 h-10 object-contain" />
      <p className="whitespace-nowrap">{ icon.name}</p>
    </div>
  )
}
