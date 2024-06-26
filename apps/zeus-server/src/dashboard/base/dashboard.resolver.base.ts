/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Dashboard } from "./Dashboard";
import { DashboardCountArgs } from "./DashboardCountArgs";
import { DashboardFindManyArgs } from "./DashboardFindManyArgs";
import { DashboardFindUniqueArgs } from "./DashboardFindUniqueArgs";
import { CreateDashboardArgs } from "./CreateDashboardArgs";
import { UpdateDashboardArgs } from "./UpdateDashboardArgs";
import { DeleteDashboardArgs } from "./DeleteDashboardArgs";
import { DashboardService } from "../dashboard.service";
@graphql.Resolver(() => Dashboard)
export class DashboardResolverBase {
  constructor(protected readonly service: DashboardService) {}

  async _dashboardsMeta(
    @graphql.Args() args: DashboardCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Dashboard])
  async dashboards(
    @graphql.Args() args: DashboardFindManyArgs
  ): Promise<Dashboard[]> {
    return this.service.dashboards(args);
  }

  @graphql.Query(() => Dashboard, { nullable: true })
  async dashboard(
    @graphql.Args() args: DashboardFindUniqueArgs
  ): Promise<Dashboard | null> {
    const result = await this.service.dashboard(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Dashboard)
  async createDashboard(
    @graphql.Args() args: CreateDashboardArgs
  ): Promise<Dashboard> {
    return await this.service.createDashboard({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Dashboard)
  async updateDashboard(
    @graphql.Args() args: UpdateDashboardArgs
  ): Promise<Dashboard | null> {
    try {
      return await this.service.updateDashboard({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Dashboard)
  async deleteDashboard(
    @graphql.Args() args: DeleteDashboardArgs
  ): Promise<Dashboard | null> {
    try {
      return await this.service.deleteDashboard(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
