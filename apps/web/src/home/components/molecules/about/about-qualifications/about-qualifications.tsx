import { TabsContent } from "@strapi-portfolio/ui";
import { BriefcaseIcon, GraduationCapIcon } from "@strapi-portfolio/ui/icons";
import {
  filterByTitle,
  type Qualification,
} from "@strapi-portfolio/web/home/models";
import { AboutQualificationItem } from "../../../atoms";

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
  const experienceQualification: Qualification | undefined =
    filterByTitle<Qualification>(qualificationData, "Experience");
  const educationQualification: Qualification | undefined =
    filterByTitle<Qualification>(qualificationData, "Education");
  return (
    <TabsContent value="qualification">
      <div className="">
        <h3 className="h3 wide:text-left mb-8 text-center">
          My Awesome Journey
        </h3>

        <div className="desktop:grid-cols-2 mb-12 grid gap-y-8">
          <AboutQualificationItem
            icon={<BriefcaseIcon size={28} />}
            qualification={experienceQualification}
          />
          <AboutQualificationItem
            icon={<GraduationCapIcon size={28} />}
            qualification={educationQualification}
          />
        </div>
      </div>
    </TabsContent>
  );
}
