import * as graphql from "@nestjs/graphql";
import { DataPointResolverBase } from "./base/dataPoint.resolver.base";
import { DataPoint } from "./base/DataPoint";
import { DataPointService } from "./dataPoint.service";

@graphql.Resolver(() => DataPoint)
export class DataPointResolver extends DataPointResolverBase {
  constructor(protected readonly service: DataPointService) {
    super(service);
  }
}
