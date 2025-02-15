"use client";

import Container from "../Container";

import useChangeCurrentSection from "@/hooks/useChangeCurrentSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQSection = () => {
  const ref = useChangeCurrentSection("faq");

  return (
    <Container>
      <section ref={ref} id="faq" className="px-5 relative">
        <div className="flex-1 space-y-5 max-w-screen-md">
          <div className="text-green-600 font-semibold uppercase">
            Why Choose Laundryland?
          </div>

          <h2 className="font-bold text-3xl desktop:text-5xl  text-header text-balance capitalize">
            Our <span className="text-primary">Frequently Ask Questions</span>{" "}
            support center
          </h2>
          <p className="font-medium text-xl">
            Find quick answers to common questions about our laundry services,
            from pickup and delivery to pricing and special care instructions.
            If you need further help, our support team is here to assist you!
          </p>
        </div>

        <div className="flex tablet:mt-16 gap-5 flex-col desktop:flex-row">
          <div className="w-full flex-1">
            <Accordion type="single" collapsible className="w-full space-y-6">
              {faqQuestions.map((faq, i) => (
                <AccordionItem value={`item-${i}`} key={i}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Container>
  );
};

const faqQuestions = [
  {
    question: "Unmatched Quality",
    answer:
      "We prioritize the quality of your laundry, using only certified chemicals and meticulous cleaning techniques.",
  },
  {
    question: "Individual Care",
    answer:
      "Your garments are always handled with care, never mixed with others to prevent cross-contamination.",
  },
  {
    question: "Fast Turnaround",
    answer:
      "We offer convenient service options, including 3, 6, 12, and one-day laundry services to suit your busy lifestyle.",
  },
  {
    question: "Reliable Service",
    answer:
      "Our team is committed to providing exceptional customer service, ensuring your complete satisfaction.",
  },
  {
    question: "Convenient Pickup & Delivery",
    answer:
      "Enjoy the ease of doorstep laundry service with free pickup and delivery within a 1 km radius.",
  },
  {
    question: "Comprehensive Insurance",
    answer:
      "If something happen to your clothes (without stain remove) we offer you Clothes to Clothes Insurance",
  },
  {
    question: "Mixing with other",
    answer: (
      <div>
        <p>
          Machines sized for your load: We use a variety of washing machines to
          ensure your laundry gets the proper cleaning based on its size and
          fabric type [3, 4]
        </p>
        <p>
          Never mixed loads: Your clothes are always washed separately from
          other customers&apos; laundry for hygiene and to avoid dye transfer
        </p>
      </div>
    ),
  },
];

export default FAQSection;
