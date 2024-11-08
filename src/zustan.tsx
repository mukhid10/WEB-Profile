import { create } from "zustand";

interface GlobalState {
  tab: string;
}

const globalState: GlobalState = {
  tab: 'About me',
};

export const useStore = create<GlobalState & { dispatch: (state: Partial<GlobalState>) => void }>((set) => ({
  ...globalState,
  dispatch: (state) => {
    set(state);
  },
}));