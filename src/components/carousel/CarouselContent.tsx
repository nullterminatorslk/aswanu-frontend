"use client";

import { FC, PropsWithChildren } from "react";
import { useCarousel } from "./Carousel";
import { cn } from "@/lib/utils";

const CarouselContent: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  const { ref } = useCarousel();
  return (
    <div
      className={cn("overflow-hidden max-w-lg min-w-0", className)}
      ref={ref}
    >
      <div className="flex gap-5 flex-none w-full">{children}</div>
    </div>
  );
};

export default CarouselContent;
