import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home({ handleHireMeClick }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation1.start({
        x: 0,
        transition: { type: "spring", duration: 2, bounce: 0.1 },
      });
      animation2.start({
        x: 0,
        transition: { type: "spring", duration: 2, bounce: 0.1 },
      });
    } else {
      animation1.start({ x: "-20vw" });
      animation2.start({ x: "10vw" });
    }
  }, [inView]);

  function handleCVDownload() {
    document.querySelector(".cv-tag").click();
  }

  return (
    <div ref={ref}>
      <div className="w-[90%] md:w-[80%] mx-auto flex px-5 py-10 md:py-16 md:flex-row flex-col items-center">
        <motion.div className="lg:max-w-lg lg:w-full md:w-1/2  mb-10 md:mb-0 drop-shadow-lg group overflow-hidden" animate={animation1}>
          <Image
            src="/images/image.jpg"
            width="500"
            height="400"
            alt="My Photo"
            className="rounded-lg brightness-125 shadow-md md:shadow-lg shadow-[#eba352] group-hover:scale-110 group-hover:object-cover group-hover:transition-all group-hover:duration-[2000]"
          />
        </motion.div>
        <motion.div animate={animation2} className="lg:flex-grow md:w-1/2 lg:pl-24  flex flex-col md:items-start  items-center w-[80%]">
          <div className="title-font text-4xl md:text-7xl mb-4  font-heading text-customBlack">
            Hi there!
          </div>
          <p className="mb-8 text-lg font-content text-darkGrey leading-relaxed w-full text-justify ">
            Fuelled by a passion for developing compelling Web Applications, I
            have a deep desire to excel and continuously improve in my work.
            Learn more about my journey below.
          </p>
          <div className="flex justify-between items-center w-full">
            <button
              type="button"
              onClick={handleHireMeClick}
              className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm uppercase font-sans border-2 border-darkGolden rounded-md  hover:bg-orange-400 hover:text-white transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 tracking-widest animate-bounce"
            >
              hire me
            </button>
            <a href="/CV/ShikharCV.pdf" download="Shikhar_Raj_CV" className="cv-tag hidden" />
            <button
              type="button"
              onClick={handleCVDownload}
              className="px-2 md:px-4 py-1 md:py-2  text-xs md:text-sm uppercase font-sans border-2 border-darkGolden rounded-md  hover:bg-orange-400 hover:text-white transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 tracking-widest animate-bounce"
            >
              download cv
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
