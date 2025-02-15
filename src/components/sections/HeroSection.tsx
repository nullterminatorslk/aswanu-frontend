"use client";

import useChangeCurrentSection from "@/hooks/useChangeCurrentSection";
import { LuNewspaper } from "react-icons/lu";
import { MdLocalPhone } from "react-icons/md";
import Container from "../Container";
import { Button } from "../ui/button";
import hero from "@/assets/images/hero.png";
import Link from "next/link";
import { numberCompact } from "@/lib/number-format";
import Image from "next/image";

const stats = [
  { title: "Our Farmers", amount: 450, showPlus: true },
  { title: "Orders Complete", amount: 1500, showPlus: true },
  { title: "Our Customers", amount: 630, showPlus: true },
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
            Connecting Farmers with Buyers,
            <span className="text-primary">&nbsp;Directly.</span>
          </h1>
          <p className="font-medium text-xl text-center desktop:text-left">
            Aswanna is a revolutionary auction platform that empowers vegetable
            farmers to connect directly with wholesale buyers, ensuring fair
            prices and efficient distribution. Discover fresh, locally sourced
            produce and support sustainable agriculture.
          </p>
          <div className="flex-col justify-center desktop:justify-start tablet:flex-row flex gap-5">
            <Link href="/market">
              <Button size={"lg"} className="shadow-lg shadow-primary/30">
                <LuNewspaper /> Browse Market
              </Button>
            </Link>
            <Button asChild size={"lg"} variant={"outline"}>
              <Link href="/signup">
                <MdLocalPhone /> Register Now
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
        <div className="max-w-screen-sm inset-0 relative">
          <Image src={hero} width={500} height={200} alt="hello" />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
