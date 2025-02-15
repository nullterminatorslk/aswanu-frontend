"use client";

import Container from "../Container";

import useChangeCurrentSection from "@/hooks/useChangeCurrentSection";
import { FC, PropsWithChildren, ReactNode } from "react";
import { FaPhone } from "react-icons/fa6";
import { RiMailOpenLine, RiMapPinFill } from "react-icons/ri";

const ContactSection = () => {
  const ref = useChangeCurrentSection("contact");

  return (
    <Container>
      <section ref={ref} className="px-5" id="contact">
        <div className="grid grid-cols-1 gap-10 tablet:grid-cols-2">
          <div className="flex-[2] space-y-5 text-center tablet:text-left">
            <div className="text-green-600 font-semibold uppercase">
              Contact US
            </div>

            <h2 className="font-bold text-3xl desktop:text-5xl  text-header text-balance capitalize">
              Need Assistance?
              <div className="text-primary"> Contact Us </div>
            </h2>
          </div>

          <p className="font-medium text-xl text-center tablet:text-left tablet:col-span-2 desktop:col-span-1 row-start-2 tablet:col-start-auto">
            Have questions or need help with your order? Our support team is
            here for you! Reach out, and we&apos;ll be happy to assist with any
            inquiries or concerns.
          </p>
        </div>
        <div className="mt-8 gap-5 grid tablet:grid-cols-2 desktop:grid-cols-3">
          <ContactCard icon={<RiMapPinFill />} title="Head Office Address">
            <p>Location: No.158, Thalawathugoda road, Pitakotte</p>
          </ContactCard>

          <ContactCard icon={<FaPhone />} title="Call Us">
            <p>
              Phone:{" "}
              <a
                className="hover:text-primary hover:underline"
                href="tel:+94761818184"
              >
                +94 76 181 8184
              </a>
            </p>
            <p>
              Whatsapp:{" "}
              <a
                className="hover:text-primary hover:underline"
                href="tel:+94761818184"
              >
                +94 76 181 8184
              </a>
            </p>
          </ContactCard>

          <ContactCard icon={<RiMailOpenLine />} title="Mail Us">
            <p>
              Help:{" "}
              <a
                className="hover:text-primary hover:underline"
                href="mailto:hello@aswenna.lk"
              >
                hello@aswenna.lk
              </a>
            </p>
            <p>
              Contact:{" "}
              <a
                className="hover:text-primary hover:underline"
                href="mailto:hello@aswenna.lk"
              >
                hello@aswenna.lk
              </a>
            </p>
          </ContactCard>
        </div>
      </section>
    </Container>
  );
};

type ContactCardProps = {
  icon: ReactNode;
  title: string;
};

const ContactCard: FC<PropsWithChildren<ContactCardProps>> = ({
  children,
  icon,
  title,
}) => {
  return (
    <div className="rounded-3xl p-6 bg-[#EBF2FF] text-header-dark">
      <div className="flex gap-3 items-center mb-4">
        <div className="rounded-full bg-white border-8 border-black p-2 text-primary">
          {icon}
        </div>
        <div className="font-bold text-lg">{title}</div>
      </div>
      <div className="text-lg font-medium">{children}</div>
    </div>
  );
};

export default ContactSection;
