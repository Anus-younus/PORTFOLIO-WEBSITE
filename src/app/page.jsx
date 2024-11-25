"use client"
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";

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
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Passionate Nextjs & React Developer with Redux.</h1>
        {/* DESC */}
        <p className="">Crafting modern, responsive web solutions with a focus on performance, usability, and innovation. Building Seamless Digital Experiences with Next.js and React.</p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <Link href={"/portfolio"} className="rounded-lg p-2 md:p-4 ring-1 ring-black bg-black text-white">View My Work</Link>
          <Link href={"/contact"} className="rounded-lg p-2 md:p-4 ring-1 ring-black">Contact Me</Link>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
