import {
  picklist,
  type GenericSchema,
  type InferOutput,
  type ObjectSchema,
} from "valibot";

export const MutationMethod = picklist(["POST", "PUT", "PATCH", "DELETE"]);
export type MutationMethod = InferOutput<typeof MutationMethod>;

export type MutationOptions<
  TResponse extends GenericSchema,
  TInput extends ObjectSchema<any, any>,
> = {
  path: string;
  response: TResponse;
  input?: InferOutput<TInput>;
  method?: MutationMethod;
};
