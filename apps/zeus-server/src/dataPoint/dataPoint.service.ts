import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataPointServiceBase } from "./base/dataPoint.service.base";

@Injectable()
export class DataPointService extends DataPointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
