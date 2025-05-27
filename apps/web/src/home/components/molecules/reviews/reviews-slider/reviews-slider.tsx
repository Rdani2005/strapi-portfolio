"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Review } from "@strapi-portfolio/web/home/models";
import { ReviewCard } from "../../../atoms";

const reviewsData: Review[] = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "John Doe",
    jobTitle: "Software Engineer",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "John Doe",
    jobTitle: "Software Engineer",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "John Doe",
    jobTitle: "Software Engineer",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "John Doe",
    jobTitle: "Software Engineer",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "John Doe",
    jobTitle: "Software Engineer",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "John Doe",
    jobTitle: "Software Engineer",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

export function ReviewsSlider() {
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        "640": { slidesPerView: 2 },
        "1400": { slidesPerView: 3 },
      }}
      spaceBetween={30}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="h-[350px]"
    >
      {reviewsData.map((review) => (
        <SwiperSlide key={review.avatar} className="h-[350px]">
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
