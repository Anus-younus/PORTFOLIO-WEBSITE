"use client"
import React, { useRef } from 'react'
import { motion, useInView, useScroll } from "framer-motion"
import Image from 'next/image'

const AboutPage = () => {
  const containerRef = useRef()
  const { scrollYProgress } = useScroll({ container: containerRef })
  const skillRef = useRef()
  // const isSkillRefInView = useInView(skillRef, {once: true})
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" })

  const expeRef = useRef()
  // const isSkillRefInView = useInView(skillRef, {once: true})
  const isExpeRefInView = useInView(expeRef, { margin: "-100px" })
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER  */}
      <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
          {/* BIOGRAPHY CONTAINER */}
          <div className='flex flex-col gap-12 justify-center'>
            {/* BIOGRAPHY TITLE */}
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className='text-lg'>I am a dedicated web developer specializing in building dynamic, user-friendly applications with a strong foundation in Next.js and React. With a passion for clean code and seamless design, I strive to create innovative solutions that bring ideas to life.</p>
            {/* BIOGRAPHY QUOTE */}
            <span className='italic'>Dedicated to crafting innovative web solutions with precision and passion.</span>
            {/* BIOGRAPHY SIGNATURE */}
            <div className=''>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 100"
                width="300"
                height="100"
              >
                <text
                  x="10"
                  y="60"
                  fontSize="48"
                  fontFamily="'Pacifico', cursive"
                  fill="black"
                >
                  Anus&apos;
                </text>
              </svg>
            </div>
          </div>
          {/* SKILLS CONTAINER */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            {/* SKILLS TITTLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              className='font-bold text-2xl'
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >SKILLS</motion.h1>
            {/* SKILLS LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className='flex gap-4 flex-wrap'
            >
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>HTML</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>CSS</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>TyoeScript</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>React</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>NextJS</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Firebase</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Redux</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Zustand</div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>App Write</div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
          </div>
          {/* EXPERINCE CONTAINER */}
          <div className='flex flex-col gap-12 justify-center' ref={expeRef}>
            {/* EXPERINCE TITTLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExpeRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className='font-bold text-2xl'
            >Experince</motion.h1>
            {/* EXPERINCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExpeRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=''
            >
              {/* EXPERINCE LIST ITEM  */}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3'>
                  {/* JOB TITTLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Junior JavaScript Developer</div>
                  {/* JOB DESC */}
                  <div className='p-2 text-sm italic'>
                    Exploring the world of modern web development with a focus on JavaScript, React, and Next.js.
                  </div>
                  {/* JOB DATE */}
                  <div className='p-3 text-red-400 text-sm'>
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    Aspiring Web Developer
                  </div>
                </div>
                {/* CENTER */}
                <div className='w-1/6'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* LINE CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'>

                </div>
              </div>
              {/* EXPERINCE LIST ITEM  */}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3'>

                </div>
                {/* CENTER */}
                <div className='w-1/6'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* LINE CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'>
                  {/* JOB TITTLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>React Developer</div>
                  {/* JOB DESC */}
                  <div className='p-2 text-sm italic'>
                    Continuously learning and building projects to enhance my skills and bring creative ideas to life.
                  </div>
                  {/* JOB DATE */}
                  <div className='p-3 text-red-400 text-sm'>
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    Aspiring Web Developer
                  </div>
                </div>
              </div>
              {/* EXPERINCE LIST ITEM  */}
              <div className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3'>
                  {/* JOB TITTLE */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>NextJS Developer</div>
                  {/* JOB DESC */}
                  <div className='p-2 text-sm italic'>
                    With a passion for clean code and seamless design.
                  </div>
                  {/* JOB DATE */}
                  <div className='p-3 text-red-400 text-sm'>
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
                    Aspiring Web Developer
                  </div>
                </div>
                {/* CENTER */}
                <div className='w-1/6'>
                  {/* LINE */}
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    {/* LINE CIRCLE */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className='hidden lg:block w-1/3 xl:1/2 sticky top-0 z-30'>
          <Image src={'/about.png'} width={300} height={500} alt='' />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage