import { create } from "zustand";
import useScreenSize from "../hooks/useScreenSize";

// export const useAppStore = create((set) => ({
//   currectIndex: 0,
//   currentScreenWidth: null,

//   upDateWindowWidth: () => {
//     function getWindowWidth() {
//       const { innerWidth: width } = window;
//       return {
//         width,
//       };
//     }
//     set(() => ({
//       currentScreenWidth: getWindowWidth(),
//     }));
//   },
// }));
