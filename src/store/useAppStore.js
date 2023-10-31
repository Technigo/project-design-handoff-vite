import { create } from "zustand";

export const useAppStore = create((set) => ({
  lang: "en",
  setLang: (payload) => set({ lang: payload }),
}));
