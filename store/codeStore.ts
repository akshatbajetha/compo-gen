import { create } from "zustand";

interface CodeState {
  code: string;
  setCode: (updatedCode: string) => void;
}

export const useCodeStore = create<CodeState>((set) => ({
  code: "",
  setCode: (updatedCode: string) => set({ code: updatedCode }),
}));
