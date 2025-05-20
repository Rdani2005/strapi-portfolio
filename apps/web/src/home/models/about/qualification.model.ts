import { array, InferOutput, object, string } from "valibot";

export const QualificationInformation = object({
  name: string(),
  qualification: string(),
  years: string(),
});

export type QualificationInformation = InferOutput<
  typeof QualificationInformation
>;

export function toQualificationInformationKey(
  qualification: QualificationInformation,
): string {
  return `${qualification.name}-${qualification.qualification}-${qualification.years}`;
}

export const Quialification = object({
  title: string(),
  data: array(QualificationInformation),
});

export type Qualification = InferOutput<typeof Quialification>;
