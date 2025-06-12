import { Fetcher } from "../../fetcher";
import { type DevServicesRequest, DevServicesResponse } from "../models";

export interface ServicesEndpoints {
  getServices(input: DevServicesRequest): Promise<DevServicesResponse>;
}

export class ServicesEndpointsFetcher
  extends Fetcher
  implements ServicesEndpoints
{
  constructor(baseUrl: string, bearerToken: string) {
    super(baseUrl, bearerToken);
  }

  getServices(input: DevServicesRequest): Promise<DevServicesResponse> {
    return this.query({
      input,
      path: "/service",
      response: DevServicesResponse,
    });
  }
}
