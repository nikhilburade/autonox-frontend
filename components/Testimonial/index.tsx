"use client";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";
import Image from "next/image";
import { useRef } from "react";

const Testimonial = () => {
  const swiperRef = useRef<any>(null);

  const handlePrev = () => swiperRef.current?.swiper.slidePrev();
  const handleNext = () => swiperRef.current?.swiper.slideNext();

  return (
    <section className="section-padding-bottom relative">
      <div className="div-padding">
        {/*  Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto text-center md:w-4/5 lg:w-2/3 xl:w-1/2"
        >
          <h2 className="heading-secondprimary font-extrabold">What Our Clients Say</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Trusted by different businesses worldwide.
          </p>
        </motion.div>

        {/* ✅ Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 lg:mt-10 relative"
        >
          <Swiper
            ref={swiperRef}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="pb-12"
          >
            {testimonialData.map((review) => (
              <SwiperSlide key={review.id}>
                <SingleTestimonial review={review} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Arrows Below */}
          <div className="flex justify-center gap-6 mt-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all"
            >
              <Image
                src="/images/icon/icon-arrow-dark.svg"
                alt="Prev"
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all"
            >
              <Image
                src="/images/icon/icon-arrow-dark.svg"
                alt="Next"
                width={24}
                height={24}
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
