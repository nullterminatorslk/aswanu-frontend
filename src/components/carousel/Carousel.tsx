"use client";

import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { FC, PropsWithChildren, createContext, useContext } from "react";

const CarouselContext = createContext<{
  ref?: UseEmblaCarouselType[0];
  api?: UseEmblaCarouselType[1];
}>({});

export function useCarousel() {
  return useContext(CarouselContext);
}

const CarouselProvider: FC<PropsWithChildren> = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
  });

  return (
    <CarouselContext.Provider value={{ ref: emblaRef, api: emblaApi }}>
      {children}
    </CarouselContext.Provider>
  );
};

export default CarouselProvider;
