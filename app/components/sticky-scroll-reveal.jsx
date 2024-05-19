'use client'
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../utils/cn.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import AnimatedText from "./AnimatedText.jsx";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--lime-200)",    // Fresh and vibrant lime
    "var(--teal-400)",    // Vibrant teal
    "var(--purple-300)",  // Deep purple for richness
    "var(--orange-400)",  // Energetic orange
    "var(--blue-300)",    // Calm and professional blue
    "var(--indigo-300)",  // Subtle indigo shade
    "var(--amber-300)",   // Warm and professional amber
  ];
  const [hovered, setHovered] = useState(false);


  function Skills({ name, img, className: style = "bg-dark" }) {
    return (
      <div className={`inline-flex  items-center justify-center rounded-full font-sm text-sm relative p-1 m-1 px-4 border border-solid border-black sm:px-2 `}>
        <img src={img} alt={name} className="w-6 h-6 mx-1 sm:w-4 sm:h-5" />
        <span className="text-dark text-sm font-normal">{name}</span>
      </div>
    );
  }

  return (
    <motion.div
      // className="w-full xl:p-24 lg:!p-16 md:!p-4 h-full inline-block z-0 pt-0  pb-0"
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }} >
      <Navbar />
      <AnimatedText className={`h-full w-full  grid place-content-center text-center text-[10rem] lg:!text-8xl sm:!mb-3 md:!text-6xl sm:p-2 xs:!text-3xl`} text='Imagination Trumps Knowledge ' />
      <div className="md:hidden"> <br /><br /><br />
      {/* <h2 className=' text-2xl flex items-center justify-center  font-bold  w-full text-center'>
        ✨ &nbsp;   Featured Projects  &nbsp; ✨ 
      </h2> <br /><br /> */}
      <center className="md:hidden">
        <pre><span className="animate-bounce	inline-block">&#8595;</span> Scroll down <span className="animate-bounce	inline-block">&#8595;</span></pre>
      </center>
      </div>
      <motion.div
        className="h-[30rem] overflow-y-auto flex justify-evenly  relative space-x-3 rounded-md p-10 md:!p-4"
        ref={ref}
      >
        <div className="w-[40%] relative flex items-start px-4 sm:w-full">
          <div className="w-[100%]">
            {content.map((item, index) => (
              <motion.div
                key={item.title + index}
                initial={{
                  scale: 0.4,
                  opacity: 0.3,
                }}
                whileInView={{
                  scale: activeCard === index ? 1 : .4,
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{ ease: "easeOut", duration: 0.5, type: "spring" }} 
                className="my-20 p-4 md:mb-0"
              >
                <a href={content[activeCard].live_link} >
                  <motion.h2
                    className="text-2xl font-bold text-black hover:underline"
                  >
                    {item.title}
                  </motion.h2>
                </a>

                <motion.p
                  className="text-lg text-black max-w-auto mt-10 sm:mt-2 sm:text-sm"
                >
                  {item.description}
                </motion.p>
                <motion.div
                  className="text-kg text-black max-w-auto mt-3 font-bold"
                >
                  <h1 className="top-2 font-bold sm:text-sm">⚙️ Technologies used in this project.</h1>
                  {item.technologies.map((tech, index) => (
                    <Skills key={index} name={tech.name} img={tech.img} />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
        <motion.div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={cn(
            " w-[40%]  flex items-center justify-center sticky top-10 sm:hidden ",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
          <div className={`flex items-center justify-center  backdrop-blur-md  absolute  ${hovered ? "opacity-100" : "opacity-0"} bg-black/40 rounded-full   transition-opacity duration-300`}>
            <button rel="noopener noreferrer" className="   text-white text-center rounded-full cursor-pointer w-fit p-3 ">
              <a href={content[activeCard].code_link}  target="_blank" className="flex items-center cursor-pointer
  justify-center">
                Code
                &nbsp;<svg class="w-6 h-6  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
                </svg>
              </a>
            </button> <span className="text-white">|</span>
            <button rel="noopener noreferrer" className="   text-white text-center rounded-full   -pointer w-fit p-3 ">
              <a href={content[activeCard].live_link} target="_blank" className="flex  cursor-pointer
 items-center justify-center">
                Try it live
                &nbsp;             <svg class=" w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">

                  <path fill-rule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clip-rule="evenodd" />
                </svg>

              </a>
            </button>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </motion.div>
  );
};
