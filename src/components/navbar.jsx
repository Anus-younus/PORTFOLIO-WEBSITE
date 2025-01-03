"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Navlink from './navLink'
import { motion } from "framer-motion"
import { list } from 'postcss'

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255, 255, 255)"
        }
    }

    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    }

    const bottomVarient = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255, 255, 255)"
        }
    }

    const listVarient = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren:0.1,
            }
        }
    }

    const listItemVariant = {
        closed: {
            x:-10,
            opacity:0
        },
        opened: {
            x:0,
            opacity:1
        },

    }

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            {/* LINKS */}
            <div className='hidden md:flex gap-4 w-1/3'>
                {links.map(link => (
                    <Navlink link={link} key={link.title} />
                ))}
            </div>
            {/* LOGO */}
            <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
                <Link href={'/'} className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
                    <span className='text-white mr-1'>Anus</span>
                    <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>.dev</span>
                </Link>
            </div>
            {/* SOCIAL LINKS */}
            <div className='hidden md:flex gap-4 w-1/3'>
                <Link href={'https://github.com/Anus-younus'}>
                    <Image src="/github.png" alt="" width={24} height={24} />
                </Link>
                {/* <Link href={''}>
                    <Image src="/dribbble.png" alt="" width={24} height={24} />
                </Link> */}
                <Link href={'https://www.instagram.com/anusbandija.21/'}>
                    <Image src="/instagram.png" alt="" width={24} height={24} />
                </Link>
                <Link href={'https://www.facebook.com/profile.php?id=61562337688701'}>
                    <Image src="/facebook.png" alt="" width={24} height={24} />
                </Link>
                {/* <Link href={''}>
                    <Image src="/pinterest.png" alt="" width={24} height={24} />
                </Link> */}
                <Link href={'https://www.linkedin.com/in/anus-younus/'}>
                    <Image src="/linkedin.png" alt="" width={24} height={24} />
                </Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className='md:hidden'>
                {/* MENU BUTTON */}
                <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setIsOpen((prev) => !prev)}>
                    <motion.div
                        variants={topVariants}
                        animate={isOpen ? "opened" : "closed"}
                        className='w-10 h-1 bg-black rounded origin-left'
                    ></motion.div>
                    <motion.div
                        variants={centerVariants}
                        animate={isOpen ? "opened" : "closed"}
                        className='w-10 h-1 bg-black rounded'
                    ></motion.div>
                    <motion.div
                        variants={bottomVarient}
                        animate={isOpen ? "opened" : "closed"}
                        className='w-10 h-1 bg-black rounded origin-left'
                    ></motion.div>
                </button>
                {/* MENU LIST */}
                {isOpen &&
                    <motion.div variants={listVarient} initial="closed" animate="opened" className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'>
                        {links.map(link => (
                            <motion.div variants={listItemVariant} key={link.title}>
                                <Link href={link.url}>{link.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                }
            </div>
        </div>
    )
}

export default Navbar