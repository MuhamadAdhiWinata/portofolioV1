import axios from "axios";
import { parseSheetResponse } from "../services/utils";

const BASE_URL = import.meta.env.VITE_SHEET_API;

export const fetchSheet = async (sheetName: string) => {
  const url = `${BASE_URL}${sheetName}`;
  const res = await axios.get(url, { responseType: "text" });
  return parseSheetResponse(res.data);
};
