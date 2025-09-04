"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="section-padding-bottom relative overflow-visible">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -top-[100%] -bottom-[100%] -z-10
        bg-gradient-to-b from-white via-indigo-500 via-purple-400 via-indigo-500 to-white
        dark:bg-black dark:bg-none"
      />

      <div className="div-padding z-10 space-y-10 md:space-y-20">
        {/* === Section 1 === */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Text */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-left space-y-6"
          >
            <div className="inline-block rounded-full bg-gradient-to-r from-indigo-700 to-purple-700 px-5 py-1.5 text-xs sm:text-sm font-semibold uppercase text-white shadow-lg">
              Automation
            </div>

            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-black dark:text-white">
              Automate your task with{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-900 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-500 dark:to-indigo-700">
                Personalized AI
              </span>
            </h2>

            {/* Desktop desc/features */}
            <div className="hidden md:block space-y-6">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Automate repetitive tasks with AI-driven workflows that save time and reduce manual effort.
              </p>
              <div className="space-y-5">
                {[
                  { id: 1, title: "Automate Your Tasks", desc: "Automate your complicated task using AI." },
                  { id: 2, title: "AI Recommendation", desc: "Get AI personalized recommendations." },
                ].map((f) => (
                  <div key={f.id} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-indigo-300 bg-white shadow-sm dark:border-purple-700 dark:bg-blacksection">
                      <span className="text-lg font-bold text-indigo-600 dark:text-purple-400">{f.id}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white">{f.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="w-full flex justify-center">
              <Image
                src="/images/about/light-1.png"
                alt="Automation"
                width={500}
                height={500}
                className="dark:hidden object-contain w-full max-w-[500px] h-auto"
              />
              <Image
                src="/images/about/dark-1.png"
                alt="Automation"
                width={500}
                height={500}
                className="hidden dark:block object-contain w-full max-w-[500px] h-auto"
              />
            </div>
          </motion.div>

          {/* Mobile desc/features */}
          <div className="md:hidden mt-6 space-y-6 w-full">
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Automate repetitive tasks with AI-driven workflows that save time and reduce manual effort.
            </p>
            <div className="space-y-5">
              {[
                { id: 1, title: "Automate Your Tasks", desc: "Automate your complicated task using AI." },
                { id: 2, title: "AI Recommendation", desc: "Get AI personalized recommendations." },
              ].map((f) => (
                <div key={f.id} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-indigo-300 bg-white shadow-sm dark:border-purple-700 dark:bg-blacksection">
                    <span className="text-lg font-bold text-indigo-600 dark:text-purple-400">{f.id}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">{f.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === Section 2 === */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          {/* Text */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-left space-y-6"
          >
            <div className="inline-block rounded-full bg-gradient-to-r from-indigo-700 to-purple-700 px-5 py-1.5 text-xs sm:text-sm font-semibold uppercase text-white shadow-lg">
              Scaling
            </div>

            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-black dark:text-white">
              Scale{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-900 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-500 dark:to-indigo-700">
                Without Limits
              </span>
            </h2>

            {/* Desktop desc/features */}
            <div className="hidden md:block space-y-6">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Our platform grows with your business — ensuring performance, reliability, and security at every stage of scale.
              </p>
              <div className="space-y-5">
                {[
                  { id: "01", title: "Cloud-Native", desc: "Built to scale smoothly on modern cloud platforms." },
                  { id: "02", title: "Reliable Performance", desc: "Stay fast and secure even as your users grow." },
                ].map((f) => (
                  <div key={f.id} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-300 bg-white shadow-sm dark:border-purple-700 dark:bg-blacksection">
                      <span className="text-lg font-bold text-indigo-600 dark:text-purple-400">{f.id}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white">{f.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <Image
              src="/images/about/light-2.svg"
              alt="Automation"
              width={500}
              height={500}
              className="dark:hidden object-contain w-full max-w-[500px] h-auto"
            />
            <Image
              src="/images/about/dark-2.svg"
              alt="Automation"
              width={500}
              height={500}
              className="hidden dark:block object-contain w-full max-w-[500px] h-auto"
            />
          </motion.div>

          {/* Mobile desc/features */}
          <div className="md:hidden mt-6 space-y-6 w-full">
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Our platform grows with your business - ensuring performance, reliability, and security at every stage of scale.
            </p>
            <div className="space-y-5">
              {[
                { id: "01", title: "Cloud-Native", desc: "Built to scale smoothly on modern cloud platforms." },
                { id: "02", title: "Reliable Performance", desc: "Stay fast and secure even as your users grow." },
              ].map((f) => (
                <div key={f.id} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-300 bg-white shadow-sm dark:border-purple-700 dark:bg-blacksection">
                    <span className="text-lg font-bold text-indigo-600 dark:text-purple-400">{f.id}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">{f.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
