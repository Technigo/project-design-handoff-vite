import { Mobiledec } from "../StyledBorder";
import useDeviceType from "../useDeviceType";

export const Border = () => {
  const deviceType = useDeviceType();

  if (deviceType === "none") {
    return null;
  }

  return <Mobiledec />;
};
