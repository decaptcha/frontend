import { create } from "zustand";

const useProjectsStore = create()((set) => ({
  projects: [],
  project: "",
  projectId: "",
  name: "",
  threshold: "",
  label: "",
  active: false,
  description: "",
  scatterConfidenceAndUsers: {},
  lablelAndUnlabelData: {},
  setProjects: (data: any) => set({ projects: data }),
  setProject: (data: any) => set({ project: data }),
  setProjectId: (data: any) => set({ projectId: data }),
  setName: (data: any) => set({ name: data }),
  setLabel: (data: any) => set({ label: data }),
  setThreshold: (data: any) => set({ threshold: data }),
  setDescription: (data: any) => set({ description: data }),
  setActive: (data: any) => set({ active: data }),
  setScatterConfidenceAndUsers: (data: any) =>
    set({ scatterConfidenceAndUsers: data }),
  setLablelAndUnlabelData: (data: any) => set({ lablelAndUnlabelData: data }),
}));

export default useProjectsStore;
