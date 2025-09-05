"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Top Section */}
        <div className="py-16 lg:py-20">
          <div className="flex flex-wrap gap-10 lg:justify-between">
            {/* Logo + Contact */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="w-full sm:w-1/2 lg:w-1/4"
            >
              <a href="/" className="inline-block">
                <Image
                  src="/images/logo/2.png"
                  alt="Logo"
                  width={80}
                  height={60}
                />
              </a>

              <p className="mt-4 mb-6 text-sm text-gray-400">
                Empowering businesses with AI-driven growth and automation.
              </p>

              <p className="mb-1.5 text-xs uppercase tracking-[3px] text-gray-500">
                Contact
              </p>
              <a
                href="mailto:autonox2025@gmail.com"
                className="text-sm font-medium text-gray-200 hover:text-primary"
              >
                autonox2025@gmail.com
              </a>
            </motion.div>

            {/* Links */}
            <div className="flex w-full flex-col gap-10 sm:flex-row lg:w-2/3 xl:w-7/12 lg:justify-between">
              {/* Quick Links */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h4 className="mb-4 text-base font-semibold text-white">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm">
                  {["Home", "Product", "Careers", "Pricing"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-primary transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Support */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h4 className="mb-4 text-base font-semibold text-white">
                  Support
                </h4>
                <ul className="space-y-2 text-sm">
                  {["Company", "Press Media", "Our Blog", "Contact Us"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="hover:text-primary transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="max-w-sm"
              >
                <h4 className="mb-4 text-base font-semibold text-white">
                  Newsletter
                </h4>
                <p className="mb-3 text-sm text-gray-400">
                  Subscribe to receive future updates
                </p>
                <form className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-full border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:border-primary focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-gray-800"
                  >
                    <svg
                      className="w-5 h-5 fill-gray-400 hover:fill-primary"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.117 1.173L18.503 9.635a.66.66 0 010 1.37L3.117 18.827A.667.667 0 012.5 18.462V1.538a.667.667 0 01.617-.365zm1.05 9.66v5.514L15.708 10 4.167 3.652v5.514h4.167v1.667H4.167z" />
                    </svg>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center gap-4 border-t border-gray-800 py-6 text-sm lg:flex-row lg:justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ul className="flex flex-wrap items-center gap-5 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary">
                  English
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Support
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-500"
          >
            &copy; {new Date().getFullYear()} Autonox. All rights reserved.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ul className="flex items-center gap-4">
              {/* Instagram */}
              <li>
                <a href="#" aria-label="instagram">
                  <svg
                    className="w-6 h-6 fill-white transition-colors hover:fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                  </svg>
                </a>
              </li>

              {/* Facebook */}
              <li>
                <a href="#" aria-label="facebook">
                  <svg
                    className="w-6 h-6 fill-white transition-colors hover:fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1 .5-1.5 2-1.5h1.5V2.1C17.2 2.1 16 2 14.6 2 11.9 2 10 3.7 10 6.7V9.5H7v4h3V22h4v-8.5z" />
                  </svg>
                </a>
              </li>

              {/* Twitter (X) */}
              <li>
                <a href="#" aria-label="twitter">
                  <svg
                    className="w-6 h-6 fill-white transition-colors hover:fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.162 5.656a8.38 8.38 0 01-2.402.658 4.2 4.2 0 001.84-2.318 8.27 8.27 0 01-2.635 1.007 4.13 4.13 0 00-7.034 3.77A11.72 11.72 0 013.92 4.76a4.12 4.12 0 001.28 5.51A4.06 4.06 0 012.8 9.713v.052a4.13 4.13 0 003.31 4.045 4.1 4.1 0 01-1.852.07 4.13 4.13 0 003.858 2.867A8.29 8.29 0 012 18.14a11.73 11.73 0 006.29 1.844c7.547 0 11.675-6.253 11.675-11.675 0-.18-.004-.36-.012-.54a8.35 8.35 0 002.209-2.113z" />
                  </svg>
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a href="#" aria-label="linkedin">
                  <svg
                    className="w-6 h-6 fill-white transition-colors hover:fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.94 5A2 2 0 114.94 7a2 2 0 012-2Zm.06 3.48H3V21h4V8.48ZM13.32 8.48H9.34V21h4v-6.57c0-3.66 4.77-4 4.77 0V21h4v-7.93c0-6.17-7.06-5.94-8.79-2.9V8.48Z" />
                  </svg>
                </a>
              </li>

              {/* GitHub */}
              <li>
                <a href="#" aria-label="github">
                  <svg
                    className="w-6 h-6 fill-white transition-colors hover:fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.5v-1.76c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.13-1.52-1.13-1.52-.92-.64.07-.63.07-.63 1.02.07 1.55 1.06 1.55 1.06.9 1.56 2.36 1.11 2.94.85.1-.67.36-1.11.65-1.36-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.5 9.5 0 015 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.37.33.69.97.69 1.96v2.91c0 .28.18.61.69.5A10.25 10.25 0 0022 12.25C22 6.58 17.52 2 12 2Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
