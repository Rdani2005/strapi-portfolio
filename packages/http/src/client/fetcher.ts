import {
  parse,
  type GenericSchema,
  type InferOutput,
  type ObjectSchema,
} from "valibot";
import { Guard, join } from "@strapi-portfolio/core";

type MutationMethod = "POST" | "PUT" | "PATCH" | "DELETE";
type QueryMethod = "GET" | "HEAD" | "OPTIONS";
type FetcherMethod = QueryMethod | MutationMethod;

type MutationOptions<
  TResponse extends GenericSchema,
  TInput extends ObjectSchema<any, any>,
> = {
  path: string;
  response: TResponse;
  input?: InferOutput<TInput>;
  method?: MutationMethod;
};

type QueryOptions<
  TResponse extends GenericSchema,
  TInput extends ObjectSchema<any, any>,
> = {
  path: string;
  response: TResponse;
  input?: InferOutput<TInput>;
  method?: QueryMethod;
};

type ExecuteOptions<TResponse extends GenericSchema> = {
  url: URL;
  response: TResponse;
  method: FetcherMethod;
  body?: Record<string, unknown>;
};

export abstract class Fetcher {
  constructor(protected baseUrl: string) {
    Guard.nonempty(this.baseUrl, "baseUrl");
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
    });
  }

  private async execute<TResponse extends GenericSchema>({
    url,
    response,
    method,
    body,
  }: ExecuteOptions<TResponse>) {
    const options: RequestInit = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method,
    };
    if (body) options.body = JSON.stringify(body);
    const res = await fetch(url, options).then(async (res) => res.json());

    return parse(response, res);
  }
}
