import type { Education } from "../types";
import { fetchSheet } from "./api";
import { sheetToJson } from "./utils";

export const getEducation = async (): Promise<Education[]> => {
  const table = await fetchSheet("Education");
  const json = sheetToJson<Record<string, any>>(table);

  return json.map((item) => ({
    id: Number(item.id),
    institution: String(item.institution),
    degree: String(item.degree),
    gpa: String(item.gpa),
    period: String(item.period),
    notes: String(item.notes),
  }));
};
