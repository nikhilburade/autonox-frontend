"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const videos = [
    "/images/hero/hero-video1.mp4",
    "/images/hero/hero-video2.mp4",
    "/images/hero/hero-video3.mp4",
    "/images/hero/hero-video4.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [text] = useTypewriter({
    words: [
      "Intelligence",
      "Automation",
      "Systems",
      "Clarity",
      "Innovation",
      "Power",
      "Efficiency",
      "Integration",
    ],


    loop: true,
    delaySpeed: 700,
    typeSpeed: 50,
    deleteSpeed: 30,
  });

  // Video fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % videos.length);
        setFade(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, [videos.length]);

  // Ensure autoplay
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => { });
  }, [currentIndex]);

  return (
    <section className="section-padding-bottom pt-30 relative overflow-visible">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 h-[160%] 
                   bg-gradient-to-b from-indigo-300 via-purple-300 to-white
                   dark:bg-[#181c31] dark:bg-none"
      />

      <div className="div-padding">
        <div className="flex flex-col lg:flex-row items-start lg:gap-12 gap-8">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 min-w-0 space-y-6">
            {/* Heading */}
            <h1 className="heading-secondprimary max-w-[20ch]">
              Tranform your Business <br />
              with <span className="gradient-text">{text}</span>
              <Cursor cursorStyle="|" />
            </h1>

            {/* Video (mobile only, directly under heading) */}
            <div className="lg:hidden w-full">
              <div className="relative w-full max-w-[700px] aspect-[16/10] rounded-3xl overflow-hidden shadow-xl">
                <video
                  key={currentIndex}
                  ref={videoRef}
                  src={videos[currentIndex]}
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  className={`w-full h-full object-cover transition-all duration-700 rounded-3xl ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                />
              </div>
            </div>

            {/* Paragraph */}
            <p className="sentence max-w-[600px]">
              At Autonox, we help businesses automate what slows them down and scale what matters most. From AI-powered dashboards and seamless CRM to one-click multi-channel campaigns and personalized content, our solutions are built to save time, cut costs, and drive unstoppable growth.
            </p>
            <p className="sentence max-w-[600px]">
              Stop working harder. Start working smarter - with Intelligence that transforms your business
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 pt-2">
              <Link
                href="/auth/signup"
                aria-label="Get started"
                className="btn-primary px-6 py-3 text-lg"
              >
                Get Started
              </Link>
              <Link
                href="#features"
                aria-label="Learn more"
                className="btn-secondary px-6 py-3 text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Side Video (desktop only) */}
          <div className="hidden lg:block w-full lg:w-1/2">
            <div className="relative w-full max-w-[700px] aspect-[16/10] rounded-3xl overflow-hidden shadow-xl">
              <video
                key={currentIndex}
                ref={videoRef}
                src={videos[currentIndex]}
                autoPlay
                muted
                playsInline
                preload="auto"
                className={`w-full h-full object-cover transition-all duration-700 rounded-3xl ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
