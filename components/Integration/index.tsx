"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  return (
    <section className="section-padding-bottom">
      <div className="div-padding">
        {/* ✅ Section Title */}
        <SectionHeader
          headerInfo={{
            title: `INTEGRATIONS`,
            subtitle: `Remotely Maintain Your Data, From Anywhere, Anytime.`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
          }}
        />

        {/* ✅ Logos & Dots */}
        <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154">
          <div className="flex flex-wrap justify-around gap-y-10">
            {/* Brand 07 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-07.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

            {/* Empty Placeholder */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            ></motion.div>

            {/* Brand 08 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-08.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

            {/* Yellow Dot */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="h-[11px] w-[11px] rounded-full bg-[#FFDB26]"></div>
            </motion.div>

            {/* Brand 09 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-09.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

            {/* Empty Placeholder */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            ></motion.div>

            {/* Green Dot */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="h-[15px] w-[15px] rounded-full bg-[#62E888]"></div>
            </motion.div>

            {/* Brand 10 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-10.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

            {/* Orange Dot */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="h-[23px] w-[23px] rounded-full bg-[#EF5C00]"></div>
            </motion.div>

            {/* Brand 11 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-11.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>

            {/* Blue Dot */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="h-[15px] w-[15px] rounded-full bg-[#016BFF]"></div>
            </motion.div>

            {/* Brand 12 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-12.svg"
                  alt="Brand"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
