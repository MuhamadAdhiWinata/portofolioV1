import type { Experience } from "../types";
import { fetchSheet } from "./api";
import { sheetToJson } from "./utils";

export const getExperiences = async (): Promise<Experience[]> => {
  const table = await fetchSheet("Experiences");
  const json = sheetToJson<Record<string, any>>(table);

  return json.map((item) => ({
    id: Number(item.id),
    company: String(item.company),
    role: String(item.role),
    period: String(item.period),
    details: String(item.details),
  }));
};
