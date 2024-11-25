"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

const items = [
  {
    id: 1,
    color: "from-blue-300 to-violet-300",
    title: "NextJS Medium Blog",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sapiente adipisci consectetur expedita deleniti esse suscipit dolores, modi accusamus sit.",
    img: "/portfolio.jfif",
    link: "http://lama.dev"
  },
  {
    id: 2,
    color: "from-violet-300 to-purple-300",
    title: "NextJS Medium Blog",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sapiente adipisci consectetur expedita deleniti esse suscipit dolores, modi accusamus sit.",
    img: "/portfolio.jfif",
    link: "http://lama.dev"
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "NextJS Medium Blog",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sapiente adipisci consectetur expedita deleniti esse suscipit dolores, modi accusamus sit.",
    img: "/portfolio.jfif",
    link: "http://lama.dev"
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "NextJS Medium Blog",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In sapiente adipisci consectetur expedita deleniti esse suscipit dolores, modi accusamus sit.",
    img: "/portfolio.jfif",
    link: "http://lama.dev"
  },
]

const PortfolioPage = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-[600vh] relative' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-5xl xl:text-8xl text-center'>My Works</div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>

          <motion.div style={{ x }} className='flex'>
            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-red-300`} />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id + item.title}
              >
                <div className="flex flex-col gap-1 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-60 h-48 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[500px] xl:h-[320px]">
                    <Image src="/portfolio.jfif" alt="" fill />
                  </div>
                  <p className="w-60 md:w-96 lg:w-[500px] xl:w-[500px] text-sm lg:text-lg">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
        <h1 className='mt-28 text-5xl xl:text-8xl'>Do you have a project</h1>
        <div className='relative'>
          <motion.svg animate={{ rotate: 360 }} transition={{ duration: 8, ease: "linear", repeat: Infinity }} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
            <defs>
              <path
                id="circlePath"
                d="M 150,150 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Frontend Developer and UI Developer
              </textPath>
            </text>
          </motion.svg>
          <Link href={"/contact"} className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white flex items-center justify-center rounded-full'>Hire me</Link>
        </div>
      </div>

    </motion.div>
  )
}

export default PortfolioPage