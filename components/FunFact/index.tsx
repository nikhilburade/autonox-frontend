"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const factSets = [
  [
    { number: 5000, suffix: "+", label: "AI Campaigns" },
    { number: 1200, suffix: "+", label: "Businesses Growing" },
    { number: 3, suffix: "x", label: "Average ROI Boost" },
  ],
  [
    { number: 3200, suffix: "+", label: "Tasks Automated" },
    { number: 900, suffix: "+", label: "Active Clients" },
    { number: 4, suffix: "x", label: "Productivity Increase" },
  ],
  [
    { number: 25000, suffix: "+", label: "Leads Generated" },
    { number: 18000, suffix: "+", label: "Emails Sent" },
    { number: 4500, suffix: "+", label: "Social Media"},
  ],
];

const FunFact = () => {
  const [setIndex, setSetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSetIndex((prev) => (prev + 1) % factSets.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const currentFacts = factSets[setIndex];

  return (
    <section className="section-padding-bottom">
      <div className="div-padding">
        <div className="relative rounded-4xl bg-gradient-to-t from-indigo-600 to-purple-700 shadow-lg p-8 sm:p-12 md:p-16 xl:p-20 overflow-hidden">
          {/* Background PNGs (scaled down) */}
          <Image
            width={180}
            height={200}
            src="/images/shape/shape-04.png"
            alt="Shape"
            className="absolute -left-6 -top-6 z-0 opacity-70"
          />
          <Image
            width={80}
            height={80}
            src="/images/shape/shape-05.png"
            alt="Shape"
            className="absolute bottom-3 right-3 z-0 opacity-70"
          />

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-10 text-center md:w-4/5 lg:w-2/3 xl:w-1/2 relative z-10"
          >
            <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Empowering Businesses to Grow & Automate
            </h2>
            <p className="mx-auto text-white/90 text-sm sm:text-base lg:text-lg lg:w-11/12">
              Real results achieved by businesses using our platform to simplify
              automation and unlock proven growth strategies.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            key={setIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-[100px] relative z-10"
          >
            {currentFacts.map((fact, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center flex-1 min-w-[100px] max-w-[140px] sm:max-w-[180px]"
              >
                <h3 className="mb-1 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  <CountUp
                    end={fact.number}
                    duration={2}
                    separator=","
                    enableScrollSpy
                  />
                  {fact.suffix}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white/80 font-medium">
                  {fact.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
