"use client";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;

  return (
    <div
      className="flex flex-col h-full justify-between 
      bg-white/70 text-gray-900 
      dark:bg-gray-900/70 dark:text-gray-200 
      shadow-lg backdrop-blur-sm 
      p-8 md:p-10 transition-all duration-500"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full border-2 border-indigo-500 flex-shrink-0"
        />
        <div>
          <h3 className="text-lg md:text-xl font-semibold">
            {name}
          </h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            {designation}
          </p>
        </div>
      </div>

      {/* Content */}
      <p className="text-sm md:text-base leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default SingleTestimonial;
