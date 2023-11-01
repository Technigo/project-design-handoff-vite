import { create } from "zustand";

export const useAppStore = create((set) => ({
  lang: "en",
  modalVisible: false,
  currentFormIndex: 0,
  formAnswer: { email: "", text: "", name: "" },
  setLang: (payload) => set({ lang: payload }),
  openModal: () => set({ modalVisible: true }),
  closeModal: () => set({ modalVisible: false }),
  changeFormIndex: () => {
    set((state) => {
      if (state.currentFormIndex <= 3) {
        return { currentFormIndex: state.currentFormIndex + 1 };
      }
    });
  },

  submitForm: () => {
    set((state) => {
      console.log(state.formAnswer);
      return {
        modalVisible: false,
        currentFormIndex: 0,
        formAnswer: { email: "", text: "", name: "" },
      };
    });
  },

  setFormAnswer: (name, input) => {
    set((state) => ({
      formAnswer: {
        ...state.formAnswer,
        [name]: input,
      },
    }));
  },
}));
