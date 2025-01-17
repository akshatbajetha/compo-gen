import { create } from "zustand";

interface CodeState {
  currentCode: string;
  prompt: string;
  setCurrentCode: (updatedCode: string) => void;
  setPrompt: (updatedPrompt: string) => void;
}

export const useCodeStore = create<CodeState>((set) => ({
  currentCode: "",
  prompt: "",
  setCurrentCode: (updatedCode: string) => set({ currentCode: updatedCode }),
  setPrompt: (updatedPrompt: string) => set({ prompt: updatedPrompt }),
}));
