import { Module } from "@nestjs/common";
import { DataPointModuleBase } from "./base/dataPoint.module.base";
import { DataPointService } from "./dataPoint.service";
import { DataPointController } from "./dataPoint.controller";
import { DataPointResolver } from "./dataPoint.resolver";

@Module({
  imports: [DataPointModuleBase],
  controllers: [DataPointController],
  providers: [DataPointService, DataPointResolver],
  exports: [DataPointService],
})
export class DataPointModule {}
