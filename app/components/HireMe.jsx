'use client'
import React from 'react'
import { CircularText } from './icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HireMe = () => {
    return (
        <div className='absolute left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-3 md:left-auto md:top-0 md:bottom-auto '>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-48 h-auto items-center justify-center relative md:w-20 "
            >
                <CircularText className={"fill-dark"} />
            </motion.div>
            <Link href='/' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark md:w-10 md:h-10 md:text-[6px] text-center'>Hire Me</Link>
        </div>
    )
}

export default HireMe
