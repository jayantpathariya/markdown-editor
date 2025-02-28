import { create } from "zustand";

type MenuState = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useMenu = create<MenuState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
