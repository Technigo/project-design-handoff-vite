import { create } from "zustand";

export const useAppStore = create((set) => ({
  lang: "en",
  modalVisible: false,
  formAnswer: {
    name: "",
    email: "",
    text: "",
  },
  setLang: (payload) => set({ lang: payload }),
  openModal: () => set({ modalVisible: true }),
  closeModal: () => set({ modalVisible: false }),

  setFormAnswer: (filed, input) => (state) =>
    set({
      formAnswer: {
        ...state.formAnswer,
        filed: input,
      },
    }),
}));
