import {
  picklist,
  type GenericSchema,
  type InferOutput,
  type ObjectSchema,
} from "valibot";

export const QueryMethod = picklist(["GET", "HEAD", "OPTIONS"]);
export type QueryMethod = InferOutput<typeof QueryMethod>;

export type QueryOptions<
  TResponse extends GenericSchema,
  TInput extends ObjectSchema<any, any>,
> = {
  path: string;
  response: TResponse;
  input?: InferOutput<TInput>;
  method?: QueryMethod;
};
