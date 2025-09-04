"use client";
import { useState } from "react";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  const plans = [
    {
      price: "$10",
      label: "Small Pack",
      desc: "Best for individuals and startups testing automation.",
      features: [
        "300 GB Storage",
        "Unlimited Photos & Videos",
        "Exclusive Support",
        "Custom Branding Strategy",
      ],
    },
    {
      price: "$59",
      label: "Medium Pack",
      desc: "For growing teams who need advanced features and reliability.",
      features: [
        "500 GB Storage",
        "Unlimited Photos & Videos",
        "Exclusive Support",
        "Custom Branding Strategy",
      ],
      popular: true,
    },
    {
      price: "$189",
      label: "Large Pack",
      desc: "Best for enterprises needing full automation & scalability.",
      features: [
        "1 TB Storage",
        "Unlimited Photos & Videos",
        "Exclusive Support",
        "Custom Branding Strategy",
      ],
    },
  ];

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section className="section-padding-bottom">
      <div className="div-padding">
        {/* Section Header */}
        <div className="animate_top mx-auto text-center mb-10">
          <SectionHeader
            headerInfo={{
              title: `PRICING PLANS`,
              subtitle: `Simple Pricing`,
              description: `Choose a plan that scales with your business. Transparent, flexible, and designed to grow alongside you.`,
            }}
          />
        </div>

        {/* Learn More (mobile only) */}
        <div className="flex justify-end mb-4 lg:hidden">
          <a
            href="/pricing"
            className="text-sm font-medium text-primary hover:underline"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Desktop view: 3 side by side */}
      <div className="hidden lg:block relative mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="flex justify-center gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="w-[350px] animate_top group relative rounded-lg 
                border border-stroke dark:border-strokedark 
               bg-gradient-to-t from-indigo-400 to-purple-500 dark:bg-blacksection 
                shadow-md p-8 transition-all duration-500"
            >
              {plan.popular && (
                <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-xs font-medium uppercase text-white">
                  Popular
                </div>
              )}

              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                {plan.price}
                <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </h3>
              <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                {plan.label}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
                {plan.desc}
              </p>

              <div className="border-t border-stroke dark:border-strokedark pt-5">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-black dark:text-gray-300"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-6 w-full py-2.5 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view: horizontal scroll */}
      <div className="lg:hidden relative mx-auto max-w-[95%] px-4">
        <div className="flex overflow-x-auto space-x-6 scrollbar-hidden pb-4">
          {plans.map((plan, i) => {
            const isExpanded = expandedCard === i;

            return (
              <div
                key={i}
                onClick={() =>
                  setExpandedCard(isExpanded ? null : i)
                }
                className="flex-shrink-0 w-[85%] sm:w-[70%] 
                  animate_top group relative rounded-lg 
                  border border-stroke dark:border-strokedark 
                 bg-gradient-to-t from-indigo-500 to-purple-500 dark:bg-blacksection 
                  shadow-md p-6 transition-all duration-500"
              >
                {plan.popular && (
                  <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-xs font-medium uppercase text-white">
                    Popular
                  </div>
                )}

                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  {plan.price}
                  <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </h3>
                <h4 className="mb-2 text-base font-semibold text-black dark:text-white">
                  {plan.label}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
                  {plan.desc}
                </p>

                <div className="border-t border-stroke dark:border-strokedark pt-4">
                  <ul className="space-y-3">
                    {(isExpanded
                      ? plan.features
                      : plan.features.slice(0, 4)
                    ).map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-black dark:text-gray-300"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {isExpanded && (
                  <button className="mt-6 w-full py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition">
                    Get Started
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
