import { create } from "zustand";

const useDeveloperApiStore = create()((set) => ({
  api_key: {},
  setApiKey: (data: string) => set({ api_key: data }),
}));

export default useDeveloperApiStore;
