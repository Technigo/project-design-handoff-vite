import { Desktopdec, Mobiledec, Tabletdec } from "../StyledBorder";
import useDeviceType from "../useDeviceType";

export const Border = () => {
  const deviceType = useDeviceType();

  if (deviceType === "none") {
    return null;
  } else if (deviceType === "tablet") {
    return <Tabletdec />;
  } else if (deviceType === "desktop") {
    return <Desktopdec />;
  } else {
    return <Mobiledec />;
  }
};
