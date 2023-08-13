import { create } from "zustand";
import json from "../../json/jsonData.json";

import { Record } from "../types";

interface JsonData {
  data: Record[];
  deleteSpaceman: (ID: string) => void;
  deleteHisNemesis: (spacemanIndex: number, nemesisIndex: number) => void;
  deleteNemesisSecrets: (
    spacemanIndex: number,
    nemesisIndex: number,
    secretsIndex: number
  ) => void;
}

export const useStore = create<JsonData>((set, get) => ({
  data: json,

  deleteSpaceman: (ID) =>
    set((state) => ({
      data: state.data.filter((obj) => obj.data.ID !== ID),
    })),

  deleteHisNemesis: (spacemanIndex, nemesisIndex) => {
    const updatedData = [...get().data];
    const nemesis = updatedData[spacemanIndex].children?.has_nemesis?.records;
    nemesis?.splice(nemesisIndex, 1);

    set(() => ({ data: updatedData }));
  },
  deleteNemesisSecrets: (spacemanIndex, nemesisIndex, secretsIndex) => {
    const updateData = [...get().data];
    const secrets =
      updateData[spacemanIndex].children?.has_nemesis?.records[nemesisIndex]
        .children?.has_secrete?.records;
    secrets?.splice(secretsIndex, 1);

    set(() => ({ data: updateData }));
  },
}));
