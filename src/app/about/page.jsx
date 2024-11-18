"use client"
import React from 'react'
import { motion } from "framer-motion"

const AboutPage = () => {
  return (
    <motion.div 
    className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{duration: 1}}
    >
{/* CONTAINER  */}
<div className='overflow-scroll'>
  {/* TEXT CONTAINER */}
  <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
    {/* BIOGRAPHY CONTAINER */}
    <div className='flex flex-col gap-12 justify-center'>
    {/* BIOGRAPHY TITLE */}
      <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
    {/* BIOGRAPHY DESC */}
      <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam qui nemo tempora ipsum doloremque, natus enim sapiente dolore eius odit iure provident animi unde. Doloremque enim quidem in modi?</p>
    {/* BIOGRAPHY QUOTE */}
      <span className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quia!</span>
    {/* BIOGRAPHY SIGNATURE */}
      <div className=''>Signature</div>
    </div>
    {/* SKILLS CONTAINER */}
    <div className=''>SKILLS</div>
    {/* EXPERINCE CONTAINER */}
    <div className=''>EXPERINCE</div>
  </div>
  {/* SVG CONTAINER */}
  <div className='hidden'></div>
</div>
    </motion.div>
  )
}

export default AboutPage