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
            <span className="text-primary">Company History</span>
          </h2>

          <p className="font-medium text-xl">
            Aswanna was founded with the goal of revolutionizing the way
            vegetable farmers distribute their produce, creating a transparent
            marketplace connecting them directly with interested clients.
            Starting with a small team and a focus on connecting local farmers
            with restaurants and small businesses, the platform quickly evolved
            based on user feedback, leading to key improvements like the
            integrated logistics system and expansion into direct-to-consumer
            sales. Through a commitment to innovation, fair pricing, and
            supporting local agriculture, Aswanna has grown into a thriving
            community, constantly striving to enhance the distribution process
            and empower farmers to reach a wider market.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default AboutSection;
