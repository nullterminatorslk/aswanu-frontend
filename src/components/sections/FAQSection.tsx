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
            Why Choose Aswanna?
          </div>

          <h2 className="font-bold text-3xl desktop:text-5xl  text-header text-balance capitalize">
            Our <span className="text-primary">Frequently Ask Questions</span>{" "}
            support center
          </h2>
          <p className="font-medium text-xl">
            Find quick answers to common questions about our Aswanna services,
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
    question: "What types of vegetable stocks are available on Aswanna?",
    answer:
      "Aswanna offers a wide variety of fresh, locally sourced vegetable stocks, including seasonal produce, common staples, and specialty items.  We work directly with farmers to ensure a diverse selection of bulk quantities suitable for wholesale buyers.",
  },
  {
    question: "How does Aswanna ensure the quality of the vegetable stocks?",
    answer:
      "We partner with farmers who adhere to strict quality standards.  While we encourage buyers to inspect the produce upon pickup or delivery, we're developing an AI-powered system that allows buyers to remotely assess the quality of available stock based on parameters they define, such as size, color, and ripeness. This feature will be available soon.",
  },
  {
    question: "How do I participate in an auction on Aswanna?",
    answer:
      "To participate in an auction, you'll need to create an account and verify your business credentials. Once verified, you can browse available vegetable stocks, set your maximum bid, and participate in the bidding process.  You'll be notified if you win the auction.",
  },
  {
    question: "What are the payment terms and conditions?",
    answer:
      "Payment terms and conditions are specified for each auction and are typically due upon successful bid. We offer various secure payment options, which are detailed during the checkout process. Please refer to the specific auction details for more information.",
  },
  {
    question: "How does Aswanna support local farmers?",
    answer:
      "Aswanna is committed to supporting local agriculture by providing farmers with a platform to reach a wider network of wholesale buyers. We prioritize fair pricing practices, ensuring farmers receive a competitive price for their bulk produce, and we promote sustainable farming practices. We also facilitate efficient logistics to minimize post-harvest losses.",
  },
  {
    question: "What happens if I win an auction?",
    answer:
      "If you win an auction, you will be notified and required to complete the payment process.  Following payment, you can coordinate pickup or delivery of the vegetable stock directly with the farmer. Aswanna facilitates this communication but does not handle the physical logistics unless otherwise specified.",
  },
];

export default FAQSection;
