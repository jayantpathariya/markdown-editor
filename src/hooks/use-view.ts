import { create } from "zustand";

type ViewState = {
  view: "editor" | "preview";
  setView: (view: "editor" | "preview") => void;
};

export const useView = create<ViewState>((set) => ({
  view: "editor",
  setView: (view) => set({ view }),
}));
