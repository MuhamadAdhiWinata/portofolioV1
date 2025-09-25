/**
 * Parse raw Google Sheet string → JSON table
 */
export const parseSheetResponse = (raw: string) => {
  const text = typeof raw === "string" ? raw : String(raw);
  const match = text.match(/setResponse\(([\s\S]*?)\);$/);

  if (!match || !match[1]) {
    throw new Error("Invalid Google Sheet response format");
  }

  return JSON.parse(match[1]).table;
};

/**
 * Convert Google Sheet table → flat JSON array
 */
export const sheetToJson = <T = Record<string, any>>(table: any): T[] => {
  if (!table || !table.cols || !table.rows) return [];

  const headers = table.cols.map((col: any) => col.label || col.id);

  return table.rows.map((row: any) => {
    const obj: Record<string, any> = {};
    row.c.forEach((cell: any, i: number) => {
      obj[headers[i]] = cell?.v ?? "";
    });
    return obj as T;
  });
};
