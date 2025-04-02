'use client'
import React, { useEffect, useRef, useState } from 'react'
import Layout from './components/Layout'
import Image from 'next/image'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from './components/icons'
import HireMe from './components/HireMe'
import { motion } from 'framer-motion'
import Transition from './components/Transition'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import { RingsAnimation } from './components/RingsAnimation'
// import GLOBE from "vanta/dist/vanta.globe.min";
// import * as THREE from "three";


const Home = () => {

  return (
    <>
      <Transition />
      <Navbar />
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0 md:pt-16 sm:pt-8 xl:!p-8 '>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 gradient-background md:!w-full lg:flex-col md:!mb-6 '>
              <Image src={'/bgimage2.png'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                width={100}
                unoptimized
                priority
                height={100}
                alt='aditya'
                className=' w-full h-auto mt-0 mr-4 lg:hidden md:!inline-block  md:!w-full' />
            </div>
            <motion.div
              className='w-60 h-60 rounded-full absolute -z-10 right-40 top-[30%] bg-gradient-to-r from-indigo-500 to-blue-500 blur-[80px] md:top-1 md:left-0 '
            ></motion.div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text='Turning Vision Into Reality With Code And Design.' className='!text-6xl md:!text-center sm:!text-3xl' />
              <p className='my-3 text-base font-medium md:text-sm sm:text-xs'>I like to craft solid and scalable frontend products with great user experiences.</p>
              <div className='flex items-center self-start mt-2 lg:self-center' >
                <Link href='https://drive.google.com/file/d/1JnQRHkZPUTdaYGx2T6NBp0QT3_LO47Jq/view?usp=sharing' className='flex items-center bg-dark text-light p-2 px-6 rounded-lg font-semibold text-lg hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base' target='_blank'>Resume <LinkArrow className='w-6 ml-1' /></Link>
                <Link className='ml-4 text-lg font-medium capitalize md:text-base text:dark underline' href="mailto:admaurya765@gmail.com">Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
      <Footer />
    </>
  )
}

export default Home
