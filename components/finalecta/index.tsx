"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FinalCta = () => {
  return (
    <>
      {/* Final CTA Section */}
      <section className="section-padding-bottom relative">
        <div className="div-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-4xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-purple-500 px-8 py-16 md:px-16 lg:px-20 shadow-2xl text-center"
          >
            {/* Glow Background */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

            {/* Text Content */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg"
            >
              Unleash Your Full Potential with us.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10"
            >
              Automate, accelerate, and scale your business with AI. Your growth
              journey starts here.
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="/auth/signup"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              Sign Up Free
              <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-60"></span>
              <Image
                width={22}
                height={22}
                src="/images/icon/icon-arrow-light.svg"
                alt="Arrow"
                className="relative z-10"
              />
            </motion.a>
          </motion.div>
        </div>
      </section>
      {/* End Final CTA Section */}
    </>
  );
};

export default FinalCta;
