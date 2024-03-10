'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MLink = motion(Link)

const Logo = () => {
    return (
        <div className='flex items-center  justify-center'>
            <MLink href='/' className='w-20 h-20 text-light  flex items-center justify-center rounded-full text-2xl fonr-bold'
                whileHover={{ scale: 1.5, rotate: '360deg' }}
            >
                <Image src={'/HDlogo.png'} alt='logo' width={200} height={200} unoptimized className='scale-150 ' />
            </MLink>
        </div>
    )
}

export default Logo