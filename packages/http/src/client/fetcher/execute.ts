import { parse, type GenericSchema } from "valibot";
import { QueryMethod } from "./query";
import { MutationMethod } from "./mutation";

type FetcherMethod = QueryMethod | MutationMethod;

export type ExecuteOptions<TResponse extends GenericSchema> = {
  url: URL;
  response: TResponse;
  method: FetcherMethod;
  body?: Record<string, unknown>;
};

export async function executeFunction<TResponse extends GenericSchema>({
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
