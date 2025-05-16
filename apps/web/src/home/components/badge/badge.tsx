"use client";
import { Inline } from "@strapi-portfolio/ui";
import { cn } from "@strapi-portfolio/ui/css";
import { ReactNode } from "react";
import CountUp from "react-countup";

type BadgeProps = {
  containerStyles: string;
  icon: ReactNode;
  endCountNumber: number;
  endCountText: string;
  badgeText: string;
};

export function Badge({
  containerStyles,
  icon,
  endCountNumber,
  endCountText,
  badgeText,
}: BadgeProps) {
  return (
    <div className={cn(containerStyles, "badge")}>
      <div className="text-primary text-3xl">{icon}</div>
      <Inline space="2" alignY="center">
        <div className="text-primary text-4xl font-bold leading-none">
          <CountUp end={endCountNumber} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-2-[70px] leding-none text-[15px] font-medium text-black">
          {badgeText}
        </div>
      </Inline>
    </div>
  );
}
