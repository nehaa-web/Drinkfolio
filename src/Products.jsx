import React from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  easeInOut,
} from "motion/react";
import juice11 from "./assets/juice11.PNG";
import juice12 from "./assets/juice12.png";
import juice13 from "./assets/juice13.png";
import juice14 from "./assets/juice14.png";
import { useState } from "react";
import { useRef } from "react";

const Products = () => {
  // Data
  const data = [
    {
      id: 1,
      image: juice11,
      title: "JU",
      span: "CY",
      bg: "bg-radial from-[#4cbd7f] from-5% to-[#2eaa66]",
    },
    {
      id: 2,
      image: juice12,
      title: "BE",
      span: "RY",
      bg: "bg-radial from-[#dd618a] from-5% to-[#ee2769]",
    },
    {
      id: 3,
      image: juice13,
      title: "ZE",
      span: "ST",
      bg: "bg-radial from-[#e69158] from-10% to-[#f76708]",
    },
    {
      id: 4,
      image: juice14,
      title: "PU",
      span: "RE",
      bg: "bg-radial from-[#8e6fd6] from-5% to-[#5f0085]",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <div>
      {data.map((item, idx) => {
        return (
          <motion.div
            ref={ref}
            style={{
              y: y,
            }}
            initial={{
              scale: 0.6,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            key={item.id}
            className={`min-h-screen sticky top-0  snap-y snap-mandatory  overflow-y-hidden md:no-scrollbar  flex items-center justify-center  text-white transition-colors duration-700 ${item.bg} `}
          >
            <div className=" flex flex-wrap lg:mt-0 mt-23 items-start justify-between w-full snap-start relative lg:px-10 px-20   ">
              {/* left div */}
              <div className="w-70 flex  flex-col  md:ml-10  gap-5 z-2">
                <h1 className="text-3xl md:text-5xl font-medium font-[Oswald]">
                  Pure Taste
                </h1>
                <p className="text-base  font-medium  font-[Raleway]">
                  Crafted from nature’s best, every bottle is a blend of pure
                  ingredients and vibrant flavors. Designed to refresh your
                  body, uplift your mind. A little moment of joy in every sip.
                </p>
              </div>

              {/* right div */}
              <div className="w-90 flex mt-4 mb-4  lg:mt-0 flex-col lg:items-end items-center mr-10 pr-8 lg:gap-5 z-20">
                <p className="font-[Raleway] font-bold  ">Cucumber Flavor</p>
                <div className="flex gap-2 font-medium text-sm ">
                  <button className="rounded-full cursor-pointer hover:bg-[#c6fd00] text-black bg-white w-16 h-10 flex items-center justify-center">
                    500 ml
                  </button>
                  <button className="rounded-full cursor-pointer hover:bg-[#c6fd00] bg-white/40 backdrop-blur-md w-16 h-10 flex items-center justify-center">
                    200 ml
                  </button>
                  <button className="rounded-full cursor-pointer hover:bg-[#c6fd00] bg-white/40 backdrop-blur-md w-16 h-10 flex items-center justify-center">
                    100 ml
                  </button>
                </div>
              </div>

              {/* Center div */}

              <motion.div
                initial={{ y: 100, opacity: 0, scale: 0.7 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="md:absolute mt-8 lg:mt-0 flex items-center justify-center md:left-2/5  "
              >
                {/* background text */}
                <h1 className="text-[19vmax] text-shadow-lg text-shadow-white  font-[Anton] gap-20 flex font-bold absolute  ">
                  {item.title} <span>{item.span}</span>
                </h1>

                {/* image */}
                <img
                  className="w-90 relative bottom-10 right-2"
                  src={item.image}
                  alt=""
                />
              </motion.div>
            </div>
          </motion.div>
        );
      })}
      <div>
        <div></div>
        <div className="fixed text-white text-shadow-2xs text-shadow-amber-50 bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <p className="font-medium font-[Oswald] text-sm md:text-base">
            _______________ Chose your size _______________
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
