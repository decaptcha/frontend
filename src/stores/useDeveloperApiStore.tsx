import { create } from "zustand";

const useDeveloperApiStore = create()((set) => ({
  api_key: {},
  walletInfo: [],
  setApiKey: (data: string) => set({ api_key: data }),
  setWalletInfo: (data: any) => set({ walletInfo: data }),
}));

export default useDeveloperApiStore;
