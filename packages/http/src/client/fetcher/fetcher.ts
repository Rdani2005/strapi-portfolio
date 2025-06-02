import { type GenericSchema, type ObjectSchema } from "valibot";
import { Guard, join } from "@strapi-portfolio/core";
import { QueryOptions } from "./query";
import { MutationOptions } from "./mutation";
import { ExecuteOptions, executeFunction } from "./execute";

export abstract class Fetcher {
  constructor(
    protected baseUrl: string,
    protected bearerToken: string,
  ) {
    Guard.required(this.baseUrl, "baseUrl");
    Guard.required(this.bearerToken, "Authorization Bearer Token");
  }

  protected query<
    TResponse extends GenericSchema,
    TInput extends ObjectSchema<any, any>,
  >({
    path,
    response,
    input,
    method = "GET",
  }: QueryOptions<TResponse, TInput>) {
    const url = new URL(join(this.baseUrl, path));

    if (input) {
      for (const [key, value] of Object.entries(input)) {
        url.searchParams.append(key, value);
      }
    }

    return this.execute({
      url,
      method,
      response,
      bearerToken: this.bearerToken,
    });
  }

  protected mutation<
    TResponse extends GenericSchema,
    TInput extends ObjectSchema<any, any>,
  >({
    path,
    response,
    input,
    method = "POST",
  }: MutationOptions<TResponse, TInput>) {
    const url = new URL(join(this.baseUrl, path));

    return this.execute({
      url,
      method,
      response,
      body: input,
      bearerToken: this.bearerToken,
    });
  }

  private async execute<TResponse extends GenericSchema>(
    options: ExecuteOptions<TResponse>,
  ) {
    return executeFunction(options);
  }
}
