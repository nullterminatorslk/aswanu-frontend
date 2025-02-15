"use client";

import Container from "../Container";

import useChangeCurrentSection from "@/hooks/useChangeCurrentSection";

const AboutSection = () => {
  const ref = useChangeCurrentSection("about");

  return (
    <Container>
      <section
        id="about"
        ref={ref}
        className="flex items-center flex-col desktop:flex-row px-5 gap-5"
      >
        <div className="flex-1 space-y-5 text-center desktop:text-left">
          <div className="text-green-600 font-semibold ">OUR STORY</div>
          <h2 className="font-bold text-3xl desktop:text-5xl pb-3 tablet:pb-6 text-header text-center desktop:text-left capitalize">
            Laundryland <span className="text-primary">Company History</span>
          </h2>

          <p className="font-medium text-xl">
            Over the years, Laundryland has evolved from a local laundry service
            to a leading provider of laundry solutions in Sri Lanka. Driven by a
            passion for cleanliness and customer satisfaction, the company has
            consistently strived to offer innovative services and affordable
            rates. Today, Laundryland is proud to serve customers across
            Colombo, delivering the highest standards of laundry care.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default AboutSection;
