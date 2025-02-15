"use client";

import { FC, useEffect, useState } from "react";
import { useCarousel } from "./Carousel";
import { cn } from "@/lib/utils";

export const CarouselDots: FC<{ className?: string }> = ({ className }) => {
  const { api } = useCarousel();
  const [selected, setSelected] = useState(0);

  const onDotClick = (index: number) => {
    api?.scrollTo(index);
    onSelect();
  };

  const onSelect = () => {
    const selected = api?.selectedScrollSnap();
    if (selected !== undefined) setSelected(selected);
  };

  useEffect(() => {
    api?.on("reInit", onSelect);
    api?.on("select", onSelect);

    return () => {
      api?.off("reInit", onSelect);
      api?.off("select", onSelect);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);

  return (
    <div className={cn("flex gap-1 my-4", className)}>
      {api?.scrollSnapList().map((_, id) => (
        <button
          key={id}
          onClick={() => onDotClick(id)}
          className={cn(
            "rounded-full w-3 h-3 bg-neutral-200",
            selected === id && "bg-black"
          )}
        />
      ))}
    </div>
  );
};
