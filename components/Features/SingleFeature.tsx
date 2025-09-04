import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleFeature = ({ feature, index }: { feature: Feature; index: number }) => {
  const { icon, title, description } = feature;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: index * 0.3, // stagger → wave effect
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.97 }}
      className={`relative flex flex-col items-center text-center 
                 rounded-3xl p-[2px] 
                 bg-gradient-to-br from-indigo-500/60 to-purple-600/60 
                 shadow-2xl overflow-hidden`}
    >
      {/* Shine sweep overlay */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                        skew-x-12 animate-shine" />
      </div>

      {/* Inner Glass Card */}
      <div className="flex flex-col items-center justify-between h-full w-full 
                      rounded-3xl bg-white/90 dark:bg-[#0f0f1a]/90 
                      px-6 py-10 backdrop-blur-lg relative overflow-hidden">

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />

        {/* Icon with animated aura */}
        <div className="relative mb-6">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-xl opacity-40"
          />
          <div className="relative flex h-20 w-20 items-center justify-center 
                          rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 
                          shadow-lg">
            <Image src={icon} width={36} height={36} alt={title} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-black dark:text-white tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-[90%]">
          {description}
        </p>

        {/* Learn More Button */}
        <motion.div whileHover={{ scale: 1.12, y: -3 }}>
          <Link
            href={`/features/${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="mt-8 relative inline-block rounded-xl px-6 py-2 text-sm font-medium text-indigo-600 dark:text-white border border-indigo-600 dark:border-purple-700 bg-white dark:bg-gray-800 transition-all duration-200 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]">
            Learn More
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SingleFeature;
