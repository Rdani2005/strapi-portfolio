import { parse, object, type InferOutput, type GenericSchema } from "valibot";

// The `AnySchema` type from Valibot is the result of the `any` function.
// We need to define the type `AnyValidationSchema` that would match any schema produced by Valibot.
type AnyValidationSchema = GenericSchema<any, any> & {
  type: any;
};

export type ConfigDefinition<
  TSchema extends AnyValidationSchema = AnyValidationSchema,
> = Record<string, TSchema>;

type InferConfig<TDefinition extends ConfigDefinition> = Readonly<{
  [TKey in keyof TDefinition]: InferOutput<TDefinition[TKey]> extends undefined
    ? Exclude<InferOutput<TDefinition[TKey]>, undefined>
    : InferOutput<TDefinition[TKey]>;
}>;

export function createConfigReader<TDefinition extends ConfigDefinition>(
  definition: TDefinition,
) {
  return <TSource extends Record<string, unknown>>(
    source: TSource,
  ): InferConfig<TDefinition> => {
    const config: Record<string, InferOutput<AnyValidationSchema>> = {};

    for (const key in definition) {
      const schema = definition[key];
      if (!schema) continue;

      config[key] = source[key];
    }

    return parse(object(definition), config) as InferConfig<TDefinition>;
  };
}
