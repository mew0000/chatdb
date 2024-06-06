import { Alert as TAlert } from "../api/alert/Alert";

export const ALERT_TITLE_FIELD = "message";

export const AlertTitle = (record: TAlert): string => {
  return record.message?.toString() || String(record.id);
};
