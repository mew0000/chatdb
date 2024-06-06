import { SortOrder } from "../../util/SortOrder";

export type AlertOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  timestamp?: SortOrder;
  triggerValue?: SortOrder;
  updatedAt?: SortOrder;
};
