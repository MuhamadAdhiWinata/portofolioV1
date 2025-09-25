import type { Project } from "../types";
import { fetchSheet } from "./api";
import { sheetToJson } from "../services/utils";

export const getProjects = async (): Promise<Project[]> => {
  const table = await fetchSheet("Projects");
  const json = sheetToJson<Record<string, any>>(table);

  return json.map((item) => ({
    id: Number(item.id),
    title: String(item.title),
    description: String(item.description),
    link: String(item.link),
    year: Number(item.year),
    tags: String(item.tags),
  }));
};
