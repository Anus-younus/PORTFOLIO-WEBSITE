"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Navlink = ({ link }) => {
    const pathname = usePathname()
    useEffect(() => {
        console.log(pathname)
    })
    return (
        <Link className={`rounded p-1 ${pathname === link.url && "bg-black text-white"}`} href={link.url}>
            {link.title}
        </Link>
    )
}

export default Navlink