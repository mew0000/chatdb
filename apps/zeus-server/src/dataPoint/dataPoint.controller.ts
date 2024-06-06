import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataPointService } from "./dataPoint.service";
import { DataPointControllerBase } from "./base/dataPoint.controller.base";

@swagger.ApiTags("dataPoints")
@common.Controller("dataPoints")
export class DataPointController extends DataPointControllerBase {
  constructor(protected readonly service: DataPointService) {
    super(service);
  }
}
