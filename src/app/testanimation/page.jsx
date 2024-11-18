"use client"
import { motion } from "framer-motion"
import React from 'react'

const TestAnimation = () => {

  const varients = {
    varient1: {
      x: 400, 
      y: 300, 
      opacity: 0.5
    },
    varient2: {
      x: 100, 
      y: 300, 
      opacity: 90,
    },
  }
  return (
    <div className='flex items-center justify-center h-full'>
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        inital={{ x: -100 }}
        variants={varients}
        animate="varient1"
        transition={{ delay: 2, duration: 2 }}
      ></motion.div>
    </div>
  )
}

export default TestAnimation