'use client'
import React from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import NumberCounter from "number-counter";
import Skills from '../components/Skills'
import Experience from '../components/Experience';
import Education from '../components/Education';
import Transition from '../components/Transition';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const About = () => {
    return (
        <div >
            <head>
                <title>Unhired Coder | About</title>
            </head>
            <Transition />
            <Navbar />
            <main className='flex w-full bg-b py-4 flex-col items-center justify-center'>
                <Layout className='pt-0 lg:!p-6 md:!p-6 sm:!pt-0 '>
                    <AnimatedText text='Fashion Fules Purpose.' className='mb-16 text-center lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8' />
                    <div className="grid w-full grid-cols-8 gap-16  xl:grid-cols-4       md:text-center sm:!gap-8">
                        <div className='col-span-3 flex flex-col items-start justify-start   md:!order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className='font-medium'> Hi, I'm Aditya Maurya (Unhired Coder), a web developer and UI/UX designer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                                new and innovative ways to bring my clients' visions to life.</p>
                            <p className='font-medium my-4'>I believe that design is about more than just making things look pretty – it's about solving problems and
                                creating intuitive, enjoyable experiences for users. </p>
                            <p className='font-medium'>Whether I'm working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project</p>
                        </div>
                        <div className="col-span-3 relative w-max h-max sm:w-auto sm:h-auto  rounded-full gradient-background flex items-center justify-center md:!order-1 md:col-span-8 md:my-6 ">
                            <img src={'/bgimage2.png'} alt='unhiredcoder' width='400px' height='400px' />
                            <span className="absolute -top-5 -z-20 w-[100%] h-[100%] rounded-full blur-lg  bg-yellow-500"></span>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
            <Footer />
        </div>
    )
}

export default About
