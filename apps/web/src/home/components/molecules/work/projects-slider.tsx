"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ProjectCard } from "../../atoms";
import { Project } from "@strapi-portfolio/web/home/models";

type ProjectSliderProps = {
  projects: Project[];
};

export function ProjectsSlider({ projects }: ProjectSliderProps) {
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
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
