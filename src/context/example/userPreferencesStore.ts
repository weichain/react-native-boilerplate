import { create } from 'zustand';

type PreferencesStore = {
  isDarkThemed: boolean;
  toggleTheme: () => void;
};

// Note: Example of a simple zustand store for managing preferences
export const usePreferencesStore = create<PreferencesStore>((set) => ({
  isDarkThemed: false,
  toggleTheme: () => {
    set((state) => ({ isDarkThemed: !state.isDarkThemed }));
  },
}));
