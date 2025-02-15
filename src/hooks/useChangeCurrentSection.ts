import { useCurrentFocusedSection } from "@/providers/CurrentFocusedSectionProvider";
import { useEffect, useRef } from "react";

const useChangeCurrentSection = (id: string) => {
  const { setCurrentSection } = useCurrentFocusedSection();

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const target = ref?.current;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // 10% visibility
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection?.(id); // Set active section ID when it's intersecting
        }
      });
    }, observerOptions);

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [setCurrentSection]);

  return ref;
};

export default useChangeCurrentSection;
