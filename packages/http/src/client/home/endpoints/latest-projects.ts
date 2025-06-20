import { Fetcher } from "../../fetcher";
import {
  LatestProjectInformationRequest,
  LatestProjectsInformationResponse,
  LatestProjectsRequest,
  LatestProjectsResponse,
} from "../models";

export interface LatestProjectEndpoints {
  getLatestProjectsInformation(
    input: LatestProjectInformationRequest,
  ): Promise<LatestProjectsInformationResponse>;
  getProjects(input: LatestProjectsRequest): Promise<LatestProjectsResponse>;
}

export class LatestProjectEndpointsFetcher
  extends Fetcher
  implements LatestProjectEndpoints
{
  constructor(baseUrl: string, bearerToken: string) {
    super(baseUrl, bearerToken);
  }

  getLatestProjectsInformation(
    input: LatestProjectInformationRequest,
  ): Promise<LatestProjectsInformationResponse> {
    return this.query({
      input,
      response: LatestProjectsInformationResponse,
      path: "/latest-project",
    });
  }

  getProjects(input: LatestProjectsRequest): Promise<LatestProjectsResponse> {
    return this.query({
      input,
      response: LatestProjectsResponse,
      path: "/projects?populate[projectImage][fields][0]=url&populate[project_categories][fields][0]=name&sort[0]=createdAt:desc&pagination[limit]=4",
    });
  }
}
