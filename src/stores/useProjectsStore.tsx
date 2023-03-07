import { create } from "zustand";

const useProjectsStore = create()((set) => ({
  projects: [],
  project: "",
  setProjects: (data: any) => set({ projects: data }),
  setProject: (data: any) => set({ project: data }),
}));

export default useProjectsStore;
