import { create } from 'zustand'

export const useStore = create((set) => ({
    select: "Select",
    isOpen: false,
    setSelect: (newValue) => set((state) => ({ ...state, select: newValue })),
    toggleDropdown: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
}))