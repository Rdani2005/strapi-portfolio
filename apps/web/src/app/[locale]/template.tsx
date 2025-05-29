"use client";

import { PropsWithChildren } from "react";
import { motion, Variants } from "framer-motion";
import { useScrollProgress } from "@strapi-portfolio/web/hooks";

type TemplateProps = PropsWithChildren;

const variants: Variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function Template({ children }: TemplateProps) {
  const completion = useScrollProgress();

  return (
    <>
      <motion.main
        transition={{
          type: "linear",
          delay: 0.2,
          duration: 0.4,
        }}
        variants={variants}
        initial="hidden"
        animate="enter"
      >
        {children}
      </motion.main>
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="bg-primary fixed bottom-0 right-0 top-0 z-50 w-1 transition-all duration-700"
      />
    </>
  );
}
