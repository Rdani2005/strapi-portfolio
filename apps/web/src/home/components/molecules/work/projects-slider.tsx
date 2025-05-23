"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Project, projectToKey } from "@strapi-portfolio/web/home/models";
import { ProjectCard } from "../../atoms";

const projectsData: Project[] = [
  {
    image: "/work/3.png",
    category: "React",
    name: "site",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "https://github.com",
  },
  {
    image: "/work/4.png",
    category: "React",
    name: "site",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "https://github.com",
  },
  {
    image: "/work/2.png",
    category: "React",
    name: "site",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "https://github.com",
  },
  {
    image: "/work/1.png",
    category: "React",
    name: "site",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/",
    github: "https://github.com",
  },
];

export function ProjectsSlider() {
  return (
    <div className="wide:max-w-[1000px] wide:absolute right-0 top-0">
      <Swiper
        className="h-[480px]"
        slidesPerView={1}
        breakpoints={{
          "640": {
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {projectsData.slice(0, 4).map((project) => (
          <SwiperSlide key={projectToKey(project)}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
