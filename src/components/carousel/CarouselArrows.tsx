"use client";

import React, { FC, useCallback, useEffect, useState } from "react";
import { useCarousel } from "./Carousel";
import { UseEmblaCarouselType } from "embla-carousel-react";
import { Button, ButtonProps } from "../ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const usePrevNextButtons = () => {
  const { api } = useCarousel();
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!api) return;
    api.scrollPrev();
  }, [api]);

  const onNextButtonClick = useCallback(() => {
    if (!api) return;
    api.scrollNext();
  }, [api]);

  const onSelect = useCallback((api: UseEmblaCarouselType[1]) => {
    setPrevBtnDisabled(!api?.canScrollPrev());
    setNextBtnDisabled(!api?.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
  }, [api, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

const buttonStyles =
  "min-w-0 border-2 border-primary rounded-full disabled:opacity-100 bg-gradient-to-t from-[#1666FF] to-[#5489FA] text-white hover:text-white disabled:from-white disabled:to-white disabled:text-primary";
export const PrevButton: FC<ButtonProps> = (props) => {
  const { prevBtnDisabled, onPrevButtonClick } = usePrevNextButtons();
  return (
    <Button
      aria-label="Goto Previous Item"
      size={"icon"}
      variant={"outline"}
      className={buttonStyles}
      {...props}
      disabled={prevBtnDisabled}
      onClick={onPrevButtonClick}
    >
      <FaChevronLeft />
    </Button>
  );
};

export const NextButton: FC<ButtonProps> = (props) => {
  const { nextBtnDisabled, onNextButtonClick } = usePrevNextButtons();
  return (
    <Button
      aria-label="Goto Next Item"
      size={"icon"}
      className={buttonStyles}
      {...props}
      disabled={nextBtnDisabled}
      onClick={onNextButtonClick}
    >
      <FaChevronRight />
    </Button>
  );
};
