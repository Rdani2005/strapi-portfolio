import { Fetcher } from "../../fetcher";
import {
  AboutMeInfoResponse,
  GetAboutMeInfoRequest,
  QualificationsInput,
  QualificationsResponse,
} from "../models";
import {
  GetSkillsAndToolsRequest,
  GetSkillsAndToolsResponse,
} from "../models/about-me/skills-and-tools";

export interface AboutMeEndpoints {
  getAboutMeInfo(input: GetAboutMeInfoRequest): Promise<AboutMeInfoResponse>;
  getQualifications(
    input: QualificationsInput,
  ): Promise<QualificationsResponse>;
  getSkillsAndTools(
    input: GetSkillsAndToolsRequest,
  ): Promise<GetSkillsAndToolsResponse>;
}

export class AboutMeEndpointsFetcher
  extends Fetcher
  implements AboutMeEndpoints
{
  constructor(baseUrl: string, bearerToken: string) {
    super(baseUrl, bearerToken);
  }

  getAboutMeInfo(input: GetAboutMeInfoRequest): Promise<AboutMeInfoResponse> {
    return this.query({
      path: "/about-me",
      response: AboutMeInfoResponse,
      input,
    });
  }

  getQualifications(
    input: QualificationsInput,
  ): Promise<QualificationsResponse> {
    return this.query({
      path: "/qualification?populate[educations][fields][0]=name&populate[educations][fields][1]=career&populate[educations][fields][2]=startDate&populate[educations][fields][3]=endDate&populate[educations][fields][4]=currentlyStuding&populate[experiences][fields][0]=jobTitle&populate[experiences][fields][1]=company&populate[experiences][fields][2]=startDate&populate[experiences][fields][3]=endDate&populate[experiences][fields][4]=currentlyWorkingHere",
      response: QualificationsResponse,
      input,
    });
  }

  getSkillsAndTools(
    input: GetSkillsAndToolsRequest,
  ): Promise<GetSkillsAndToolsResponse> {
    return this.query({
      path: "/skills-and-tool?populate[tools][populate]=image&populate[skills]=*",
      response: GetSkillsAndToolsResponse,
      input,
    });
  }
}
