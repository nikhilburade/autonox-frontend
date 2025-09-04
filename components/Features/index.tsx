"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";

const Feature = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedFeatures = showAll ? featuresData : featuresData.slice(0, 3);

  return (
    <section id="features" className="section-padding-bottom">
      <div className="div-padding text-center">
        {/* Section Header */}
        <h1 className="heading-secondprimary text-center">
          Core Features of Nexora
        </h1>

        {/* Features Grid */}
        <div className="mt-15 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {displayedFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <SingleFeature feature={feature} index={index} />
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        {featuresData.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-primary px-8 py-3 text-lg"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Feature;
