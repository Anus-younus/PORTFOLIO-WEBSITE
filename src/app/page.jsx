"use client"
import Image from "next/image";
import { motion } from "framer-motion"

const Homepage = () => {
  return (
    <motion.div 
    className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{duration: 1}}
    >
    <div className="h-full flex flex-col md:gap-10 md:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 md:w-full md:h-full relative z-0">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col md:w-full md:h-full gap-4 items-center justify-center">
        {/* TITTLE */}
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
        {/* DESC */}
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, similique autem vel soluta illum velit rem provident minus minima hic?</p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="rounded-lg p-2 md:p-4 ring-1 ring-black bg-black text-white">View My Work</button>
          <button className="rounded-lg p-2 md:p-4 ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
