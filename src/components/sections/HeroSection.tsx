"use client";

import useChangeCurrentSection from "@/hooks/useChangeCurrentSection";
import { LuNewspaper } from "react-icons/lu";
import { MdLocalPhone } from "react-icons/md";
import Container from "../Container";
import { Button } from "../ui/button";

import Link from "next/link";
import { numberCompact } from "@/lib/number-format";

const stats = [
  { title: "Our Custermers", amount: 1000, showPlus: true },
  { title: "Orders Complete", amount: 1500, showPlus: true },
  { title: "Our Branches", amount: 6, showPlus: true },
];

const HeroSection = () => {
  const ref = useChangeCurrentSection("home");
  return (
    <Container>
      <section
        ref={ref}
        className="flex flex-col-reverse items-center desktop:flex-row gap-14 px-5  justify-between"
      >
        <div className="grid gap-6 max-w-[700px]">
          <h1 className="font-extrabold text-3xl desktop:text-5xl pb-3 tablet:pb-6 text-header text-center desktop:text-left">
            Fastest, Highest-Quality, and Affordable Laundry Service! with
            <span className="text-primary">&nbsp;Laundryland</span>
          </h1>
          <p className="font-medium text-xl text-center desktop:text-left">
            Laundryland (Pvt) Ltd is Sri Lanka&apos;s premier laundry service,
            dedicated to providing exceptional care for your garments. With our
            24/7 availability and fast turnaround times, we offer a hassle-free
            laundry experience like no other.
          </p>
          <div className="flex-col justify-center desktop:justify-start tablet:flex-row flex gap-5">
            <Button size={"lg"} className="shadow-lg shadow-primary/30">
              <LuNewspaper /> Make Appointment
            </Button>
            <Button asChild size={"lg"} variant={"outline"}>
              <Link href="tel:+94761818184">
                <MdLocalPhone /> Call Us More Information
              </Link>
            </Button>
          </div>

          <div className="flex justify-evenly desktop:justify-start gap-3 tablet:gap-8 mt-10">
            {stats.map((stat, i) => (
              <div key={i} className="grid place-items-center">
                <div className="text-header text-4xl font-bold flex items-center">
                  {numberCompact(stat.amount)}
                  {stat.showPlus && "+"}
                </div>
                <div className="text-sm tablet:text-xl">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
