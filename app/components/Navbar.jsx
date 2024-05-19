'use client'
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './icons';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
    // const [isopen, setIsopen] = useState(false);
    const [isCLicked, setIsClicked] = useState(false);
    const router = useRouter();
    // const ref=useRef(null)

    const handleClick = (e) => {
        // e.preventDefault()
        setIsClicked(!isCLicked)

    };


    const handleClickCancle = (e) => {
        // e.preventDefault()
        setIsClicked(!isCLicked)
    }

    const CustomMobLink = ({ href, toggle, title, className = "" }) => {
        const pathname = usePathname();

        const handleClick = () => {
            // e.preventDefault()
            toggle()
            router.push(href);
        };


        return (
            <button
                data-text={title}
                id='navbtn'
                onClick={handleClick}
                className={`${className} z-10 duration-300 text-3xl my-4 font-semibold hover:text-white relative group ${pathname === href ? '!text-white' : 'text-white'}`}
            >
                {title}
                <span className={`-z-10 inline-block  h-full w-0 bg-dark absolute  right-0  group-hover:left-0 group-hover:w-full transition-all ease duration-300 ${pathname === href ? 'w-full' : 'w-0 '}`}>&nbsp;</span>
            </button>
        );
    };

    const CustomLink = ({ href, title, className = "" }) => {
        const pathname = usePathname()
        return (
            <Link href={href} className={`${className} z-10 duration-300 hover:text-white relative group ${pathname === href ? '!text-white' : 'text-black'}`}>
                {title}
                <span className={`-z-10 inline-block  h-full w-0 bg-dark absolute  right-0  group-hover:left-0 group-hover:w-full transition-all ease duration-300 ${pathname === href ? 'w-full' : 'w-0 '}`}>&nbsp;</span>
            </Link>
        );
    };


    return (
        <header className='relative w-full px-32 pl-8 py-8 font-medium  flex items-center justify-between'>
            <button
                onClick={(e) => handleClick(e)} className='flex-col z-20 justify-center cursor-pointer items-center hidden  lg:flex'
            >
                <div className="w-6 h-[2px] rounded-xl bg-gray-900 mb-1"></div>
                <div className="w-6 h-[3px] rounded-xl bg-gray-900 mb-1"></div>
                <div className="w-6 h-[2px] rounded-xl bg-gray-900"></div>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink title='Home' className=' p-[2px] inline-flex items-center mr-4' href='/' />
                    <CustomLink title='About' className='  p-[2px] inline-flex items-center mx-4' href='/about' />
                    <CustomLink title='Projects' className='  p-[2px] inline-flex items-center mx-4' href='/projects' />
                    <CustomLink title='Articles' className='  p-[2px] inline-flex items-center ml-4' href='/articles' />
                </nav>
                <nav className='flex items-center justify-between flex-wrap'>
                    <motion.a href='/' whileHover={{ y: -4, scale: 1.2 }} className='w-7 mx-3 drop-shadow-md' whileTap={{ scale: 0.9 }} target='_blank'><LinkedInIcon /></motion.a>
                    <motion.a href='/' whileHover={{ y: -4, scale: 1.2 }} className='w-7 mx-3 drop-shadow-md' whileTap={{ scale: 0.9 }} target='_blank'><GithubIcon /></motion.a>
                    <motion.a href='/' whileHover={{ y: -4, scale: 1.2 }} className='w-7 mx-3 drop-shadow-md' whileTap={{ scale: 0.9 }} target='_blank'><TwitterIcon /></motion.a>
                    <motion.a href='/' whileHover={{ y: -4, scale: 1.2 }} className='w-7 ml-3 drop-shadow-md' whileTap={{ scale: 0.9 }} target='_blank'><PinterestIcon /></motion.a>
                </nav>
           
            </div>

            <motion.div className={`min-w-[100vw] min-h-[100vh] fixed top-0 left-0 z-30 flex  flex-col justify-center items-center py-12 bg-dark/70 backdrop-blur-xl `}
                initial={{clipPath: "circle(0% at 0% 0%)" }}
                animate={{clipPath: isCLicked ? "circle(100% at 50% 50%)" : "circle(0% at 0% 0%)" }}
                transition={{ duration: .5, type:'tween'}}
                >
                <nav className='flex items-center justify-center flex-col'>
                    <span onClick={(e) => handleClickCancle(e)} className='w-10 h-10 fixed right-8 top-8 flex justify-center items-center p-2 cursor-pointer text-2xl bg-light text-black font-extrabold rounded-full'>x</span>
                    <CustomMobLink title='Home' className='p-[4px] inline-flex items-center mr-4' toggle={handleClick} href='/' />
                    <CustomMobLink title='About' className='p-[4px] inline-flex items-center mx-4' toggle={handleClick} href='/about' />
                    <CustomMobLink title='Projects' className='p-[4px] inline-flex items-center mx-4' toggle={handleClick} href='/projects' />
                    <CustomMobLink title='Articles' className='p-[4px] inline-flex items-center ml-4' toggle={handleClick} href='/articles' />
                </nav>

                <nav className='flex items-center justify-evenly mt-3 flex-wrap'>
                    <motion.a href='' whileHover={{ y: -4, scale: 1.2 }} className='w-7 mx-3 drop-shadow-md' whileTap={{ scale: 0.9 }} target='_blank'><LinkedInIcon /></motion.a>
                    <motion.a href='/' whileHover={{ y: -4, scale: 1.2 }} className='w-7 mx-3 drop-shadow-md' whileTap={{ scale: 0.9 }} target='_blank'><GithubIcon /></motion.a>
                    <motion.a href='/' whileHover={{ y: -4, scale: 1.2 }} className='w-7 mx-3 drop-shadow-md' whileTap={{ scale: 0.9 }} target='_blank'><TwitterIcon /></motion.a>
                    <motion.a href='/' whileHover={{ y: -4, scale: 1.2 }} className='w-7 ml-3 drop-shadow-md' whileTap={{ scale: 0.9 }} target='_blank'><PinterestIcon /></motion.a>
                </nav>
            </motion.div>

            {/* : null
            } */}



            {/* <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div> */}
        </header>
    )
}

export default Navbar