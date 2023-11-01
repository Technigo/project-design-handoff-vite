import { create } from 'zustand';


export const useLanguageStore = create((set) => ({
    language: 'Eng', // Default language
    setLanguage: (lang) => set({ language: lang }),
  }));
  
  