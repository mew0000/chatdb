import { DataPointWhereInput } from "./DataPointWhereInput";
import { DataPointOrderByInput } from "./DataPointOrderByInput";

export type DataPointFindManyArgs = {
  where?: DataPointWhereInput;
  orderBy?: Array<DataPointOrderByInput>;
  skip?: number;
  take?: number;
};
