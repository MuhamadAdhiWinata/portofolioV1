import type { Profile } from "../types";
import { fetchSheet } from "./api";
import { sheetToJson } from "../services/utils";

export const getProfiles = async (): Promise<Profile[]> => {
  const table = await fetchSheet("Profile");
  const json = sheetToJson<Record<string, any>>(table);

  return json.map((item) => ({
    id: Number(item.id),
    name: String(item.name),
    title: String(item.title),
    location: String(item.location),
    email: String(item.email),
    phone: String(item.phone),
    linktree: String(item.linktree),
    avatar: String(item.avatar),
  }));
};
