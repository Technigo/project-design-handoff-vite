import { create } from 'zustand';
import i18next from './Translate/i18next';

export const useLanguageStore = create((set) => ({
    language: 'en', // Default language

    setLanguage: (lang) => {
        i18next.changeLanguage(lang);  // Change language in i18next
        set({ language: lang });  // Set language in Zustand store
    },
}));
