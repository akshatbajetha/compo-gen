import { create } from "zustand";

interface CodeState {
  currentCode: string;
  setCurrentCode: (updatedCode: string) => void;
}

export const useCodeStore = create<CodeState>((set) => ({
  currentCode: "",
  setCurrentCode: (updatedCode: string) => set({ currentCode: updatedCode }),
}));
