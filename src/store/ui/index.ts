import { create } from 'zustand'

interface State  {
    openMenu: boolean;
    isOpen: () => void;
    isClose: () => void;
}

export const useUiStore = create<State>()((set) => ({
    openMenu: false,
    isOpen: () => set({ openMenu: true }),
    isClose: () => set({ openMenu: false }),
}));