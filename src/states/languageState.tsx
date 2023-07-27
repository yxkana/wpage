import { create } from "zustand";

interface LanguageState {
  czech: boolean;
  changeState: (newState: boolean)=>void
}

export const useLanguageState = create<LanguageState >((set) => ({
  czech: false,

  changeState: (newState: boolean) => set((state) => ({ czech: newState })),
}));
