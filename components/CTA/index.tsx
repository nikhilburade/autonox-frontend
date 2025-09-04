"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* CTA Start */}
      <section className="section-padding-bottom">
        <div className="div-padding">
          <div className="rounded-4xl bg-gradient-to-t from-indigo-500 to-blue-500 to-purple-500 px-7.5 py-12.5 md:px-12.5 xl:px-17.5 xl:py-0 shadow-lg relative overflow-hidden flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2">
              <h2 className="mb-4 w-11/12 text-3xl font-bold text-white dark:text-white xl:text-sectiontitle4">
                Join Today & Accelerate Your Growth
              </h2>
              <p className=" text-lg text-white dark:text-white">
                Use AI to automate your tasks, increase sales, and grow your
                business faster. Your all-in-one growth partner is here.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]">
              <div className="flex items-center justify-end xl:justify-between">
                <Image
                  width={299}
                  height={299}
                  src="/images/shape/shape-06.png"
                  alt="Saly"
                  className="hidden xl:block"/>
                <a
                  href="/auth/signup"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:scale-110 active:bg-gray-400 duration-200 dark:bg-white dark:text-black">
                  Sign up free
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-dark.svg"
                    alt="Arrow"
                    className="dark:hidden"/>
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-light.svg"
                    alt="Arrow"
                    className="hidden dark:block"/>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA End */}
    </>
  );
};

export default CTA;
