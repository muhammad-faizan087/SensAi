import { faqs } from "@/data/faqs";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faqs = () => {
  return (
    <section className="text-center px-4 md:px-8 py-8 md:py-12 mb-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 md:gap-8">
        <div className="">
          <h2 className="text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg max-w-[325px] mx-auto text-center">
            Find answers to common questions about our platform
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 w-[90%] md:w-[80%] mx-auto">
          {faqs.map((faq, index) => {
            return (
              <Accordion type="single" collapsible key={index}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className={"text-lg font-bold"}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className={"text-left text-gray-500"}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
