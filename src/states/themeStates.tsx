import { create } from "zustand";

interface ThemeState {
  dark: boolean;
  changeState: (newState: boolean)=>void
}

export const useThemeState = create<ThemeState>((set) => ({
  dark: false,

  changeState: (newState: boolean) => set((state) => ({ dark: newState })),
}));
