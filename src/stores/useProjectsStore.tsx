import { create } from "zustand";

const useProjectsStore = create()((set) => ({
  projects: [],
  project: "",
  name: "",
  expiry: "",
  threshold: "",
  label: "",
  setProjects: (data: any) => set({ projects: data }),
  setProject: (data: any) => set({ project: data }),
  setName: (data: any) => set({ name: data }),
  setLabel: (data: any) => set({ label: data }),
  setThreshold: (data: any) => set({ threshold: data }),
  setExpiry: (data: any) => set({ expiry: data }),
}));

export default useProjectsStore;
