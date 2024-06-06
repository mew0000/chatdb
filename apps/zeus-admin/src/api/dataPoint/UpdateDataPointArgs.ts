import { DataPointWhereUniqueInput } from "./DataPointWhereUniqueInput";
import { DataPointUpdateInput } from "./DataPointUpdateInput";

export type UpdateDataPointArgs = {
  where: DataPointWhereUniqueInput;
  data: DataPointUpdateInput;
};
