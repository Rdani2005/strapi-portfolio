import { Inline, Stack, TabsContent } from "@strapi-portfolio/ui";
import { BriefcaseIcon, GraduationCapIcon } from "@strapi-portfolio/ui/icons";
import { AboutExperience } from "../about-experience";
import { filterByTitle, type Qualification } from "../../models";

const qualificationData: Qualification[] = [
  {
    title: "Education",
    data: [
      {
        name: "ULACIT",
        qualification: "Bachellor of Computer Engineer",
        years: "2025 - present",
      },
      {
        name: "CTP Calle Blancos",
        qualification: "Software Development Technician",
        years: "2020 - 2023",
      },
      {
        name: "Platzi",
        qualification: "Software Engineer",
        years: "2016 - present",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        name: "Servicios Internacionales Multidisciplinarios",
        qualification: "Senior Software Developer",
        years: "2024 - present",
      },
      {
        name: "Orbitas Software Development Group",
        qualification: "Senior Software Architect",
        years: "2022 - 2024",
      },
      {
        name: "Freelancer",
        qualification: "Senior Software Consultant",
        years: "2020 - present",
      },
    ],
  },
];

export function AboutQualifications() {
  return (
    <TabsContent value="qualification">
      <div className="">
        <h3 className="h3 desktop:text-left mb-8 text-center">
          My Awesome Journey
        </h3>

        <div className="desktop:grid-cols-2 mb-12 grid gap-y-8">
          <Stack space="6">
            <Inline
              space="4"
              alignY="center"
              className="text-primary text-[22px]"
            >
              <BriefcaseIcon size={28} />
              <h4 className="font-medium capitalize">
                {
                  filterByTitle<Qualification>(qualificationData, "Experience")
                    ?.title
                }
              </h4>
            </Inline>
            <AboutExperience
              qualification={filterByTitle<Qualification>(
                qualificationData,
                "Experience",
              )}
            />
          </Stack>
          <Stack space="6">
            <Inline
              space="4"
              alignY="center"
              className="text-primary text-[22px]"
            >
              <GraduationCapIcon size="28" />
              <h4 className="font-medium capitalize">
                {
                  filterByTitle<Qualification>(qualificationData, "Education")
                    ?.title
                }
              </h4>
            </Inline>
            <AboutExperience
              qualification={filterByTitle<Qualification>(
                qualificationData,
                "Education",
              )}
            />
          </Stack>
        </div>
      </div>
    </TabsContent>
  );
}
