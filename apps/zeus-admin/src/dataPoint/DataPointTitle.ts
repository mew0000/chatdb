import { DataPoint as TDataPoint } from "../api/dataPoint/DataPoint";

export const DATAPOINT_TITLE_FIELD = "id";

export const DataPointTitle = (record: TDataPoint): string => {
  return record.id?.toString() || String(record.id);
};
