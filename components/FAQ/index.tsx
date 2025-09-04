"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const handleFaqToggle = (id: number) => {
    setActiveFaq((prev) => (prev === id ? 0 : id));
  };

  return (
    <section className="section-padding-bottom">
      <div className="div-padding">
        <div className="flex flex-wrap gap-y-6 md:flex-nowrap md:gap-x-10">
          {/* Left column (40%) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left w-full md:w-2/5 flex items-center justify-center text-center"
          >
            <h2 className="relative heading-secondprimary xl:text-hero">
              Frequently Asked Questions
            </h2>
          </motion.div>

          {/* Right column (60%) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right w-full md:w-3/5"
          >
            <div className="rounded-lg bg-white/80 dark:bg-black/70 shadow-lg backdrop-blur-sm">
              {/* Scrollable FAQ list */}
              <div
                className="scrollbar-hidden max-h-[18rem] sm:max-h-[20rem] md:max-h-[22rem] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar"
                aria-label="FAQ list"
              >
                {faqData.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    faqData={{ ...faq, activeFaq, handleFaqToggle }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
