import { create } from "zustand";

export const useBodyColorStore = create((set) => ({
    activeColor: "Brown",
    setActiveColor: (color) => set({ activeColor: color }),
}));

export const useMetalColor = create((set) => ({
    activeMetal: "Silver",
    setActiveMetal: (metal) => set({ activeMetal: metal }),
}));

export const useMaterial = create((set) => ({
    activeMaterial: "Leather",
    setActiveMaterial: (material) => set({ activeMaterial: material }),
}));