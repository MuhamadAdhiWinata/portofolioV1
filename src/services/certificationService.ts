import type { Certification } from "../types";
import { fetchSheet } from "./api";
import { sheetToJson } from "./utils";

export const getCertifications = async (): Promise<Certification[]> => {
  const table = await fetchSheet("Certifications");
  const json = sheetToJson<Record<string, any>>(table);

  return json.map((item) => ({
    id: Number(item.id),
    name: String(item.name),
    issuer: String(item.issuer),
    year: Number(item.year),
    link: String(item.link),
  }));
};
