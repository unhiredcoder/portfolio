// import React from 'react'
// import Layout from '../components/Layout'
// import AnimatedText from '../components/AnimatedText'
// import Link from 'next/link'
// import Image from 'next/image'
// import { GithubIcon } from '../components/icons'




// function FeaturedProject({ type, title, summary, img, link, github }) {
//     return (
//         <article className='w-full p-8 flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl '>
//             <Link href={link} className='w-1/2 cursor-pointer overflow-hidden rounded-lg  ' target='_blank'>
//                 <Image width={100} height={100} unoptimized src={img} alt={title} className='w-full h-auto' />
//             </Link>
//             <div className='w-1/2 flex flex-col items-start justify-between pl-6 '><span className='text-primary text-xl font-medium'>
//                 {type}
//             </span>
//                 <Link href={link} className='hover:underline underline-offset-2' target='_blank'>

//                     <h2 className='mt-2 w-full text-left text-4xl font-bold '>{title}</h2>
//                 </Link>
//                 <p className='my-2 font-medium text-dark'>{summary}</p>
//                 <div className='mt-2 flex items-center'>
//                     <Link href={github} target='_blank' className='w-10'> <GithubIcon /></Link>
//                     <Link href={github} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold' >Visit Project</Link>
//                 </div>
//                 <div></div>
//             </div>
//         </article>
//     )
// }


// function Project({ title, type, img, link, github }) {
//     return (
//         <article className='flex flex-col w-full items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
//             <Link href={link} className='w-full cursor-pointer overflow-hidden rounded-lg  ' target='_blank'>
//                 <Image width={100} height={100} unoptimized src={img} alt={title} className='w-full h-auto' />
//             </Link>
//             <div className='w-full flex flex-col items-start justify-between mt-4 '><span className='text-primary text-xl font-medium'>
//                 {type}
//             </span>
//                 <Link href={link} className='hover:underline underline-offset-2' target='_blank'>

//                     <h2 className='mt-2 w-full text-left text-3xl font-bold '>{title}</h2>
//                 </Link>
//                 <div className='w-full mt-2 flex items-center justify-between'>
//                     <Link href={github} target='_blank' className='underline text-lg font-semibold' >Visit</Link>
//                     <Link href={github} target='_blank' className='w-8'> <GithubIcon /></Link>

//                 </div>
//                 <div></div>
//             </div>
//         </article>
//     )
// }




// const Projects = () => {
//     return (
//         <main className='flex flex-col w-full mb-15 items-center justify-center'>
//             <Layout className='pt-20'>
//                 <AnimatedText className='mb-16 text-center' text='Imagination Trumps Knowledge' />
//                 <div className="grid grid-cols-12 gap-24">
//                     <div className="col-span-12">

//                         <FeaturedProject title='Create screener application' summary='
// Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem vitae ratione, ullam explicabo quibusdam autem? Repellat possimus saepe blanditiis.'  link={'/'} type='Featured Project' github='/' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGySQvtHb7iDFZrM_O66I0DfcPkvBOiC9dQ&usqp=CAU' />
//                     </div>
//                     <div className="col-span-6">
//                         <Project title='Create screener application' link={'/'} type='Featured Project' github='/' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGySQvtHb7iDFZrM_O66I0DfcPkvBOiC9dQ&usqp=CAU' />
//                     </div>
//                     <div className="col-span-6">
//                         <Project title='Create screener application' link={'/'} type='Featured Project' github='/' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGySQvtHb7iDFZrM_O66I0DfcPkvBOiC9dQ&usqp=CAU' />
//                     </div>
//                     <div className="col-span-12">
//                         <FeaturedProject title='Create screener application' summary='
// Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem vitae ratione, ullam explicabo quibusdam autem? Repellat possimus saepe blanditiis.'  link={'/'} type='Featured Project' github='/' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGySQvtHb7iDFZrM_O66I0DfcPkvBOiC9dQ&usqp=CAU' />
//                     </div>
//                     <div className="col-span-6"> <Project title='Create screener application' link={'/'} type='Featured Project' github='/' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGySQvtHb7iDFZrM_O66I0DfcPkvBOiC9dQ&usqp=CAU' /></div>
//                     <div className="col-span-6">
//                         <Project title='Create screener application' link={'/'} type='Featured Project' github='/' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGySQvtHb7iDFZrM_O66I0DfcPkvBOiC9dQ&usqp=CAU' />
//                     </div>

//                 </div>

//             </Layout>
//         </main>
//     )
// }

// export default Projects



'use client'
import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import Layout from "../components/Layout";
import Transition from "../components/Transition";

const items = [
    {
        id: 4,
        title: "C2P (agency)",
        img: '/c2p.png',
        desc: "C2PVentures is a dynamic agency specializing in web and app developmet services",
        git_link: "https://github.com/yuvavt/Tracking-of-Human-Activities",
        live_link:"http://c2pventures.com"
    },,
    {
        id: 1,
        title: "MelodyBox",
        img: 'https://images.ctfassets.net/3c6c8qjh7eoh/5PSTkJzJknRIT7zmAkNYlK/ddcba631a3b1d67750c8474824771fd2/image.png',
        desc: "Music Player lets you manage all your music files quickly and easily . This audio player supports almost all types of mp3.",
        git_link: "https://github.com/yuvavt/DiagnoSym",
        live_link:"http://melodybox.netlify.app"
    },
    {
        id: 2,
        title: "Fit Club",
        img: '/gym.png',
        desc: "An innovative dessert-focused website streamlining the dessert ordering experience for users, offering a diverse range of treats. Implemented user-friendly features, including real-time management.",
        git_link: "https://github.com/yuvavt/douce-cravings",
        live_link:"http://artbyadi00.pages.dev"
    },
    {
        id: 3,
        title: "Space X",
        img: '/spacex.png',
        desc: "‘Book Jam’ enables users to browse, search and access a variety of books. It was created to function as both a digital library and a bookstore. The program intends to provide book lovers with an enjoyable and convenient experience that will make it easy for them to find and buy books.",
        git_link: "https://github.com/yuvavt/book-jam",
        live_link:"http://artbyadi44.netlify.app"
    },
 
    {
        id: 5,
        title: "Grocify",
        img: '/grocify.png',
        desc: "A comprehensive mobile application catering to three distinct user needs: individuals seeking self-diagnosis, those seeking valuable information on dengue precautions and measures, well-being and knowledge dissemination.",
        git_link: "https://github.com/yuvavt/Dengue-Alert-System-A-Life-Saviour",
        live_link:"http://c2pventures.com"
    },
];

const Single = ({ item, id }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["end end", "start start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);
    const [hovered, setHovered] = useState(false);



    function Skills({ name, img, className: style = "bg-dark" }) {
        return (
            <div className={`flex w-fit h-fit items-center justify-center rounded-full bg-slate-400/40 font-sm text-sm relative p-1 px-4 text-light shadow-md`}>
                <img src={img} alt={name} className="w-6 h-6 mx-1" />
                <span>{name}</span>
            </div>
        );
    }


    return (
        <section className=" md:-z-10 text-left flex  relative ">
            <div className=" flex items-center justify-center w-full h-full  ">
                <div className=" max-w-[1366px] py-28 h-full mx-auto flex gap-10 items-center justify-center overflow-hidden md:flex-col md:!transform-none">
                    <motion.div
                        ref={ref}
                        className="aa cursor-pointer  flex-col p-4 flex m-3 items-center justify-center h-[50%] relative"
                        // onClick={()=>setHovered(true)}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <img
                            src={item.img}
                            className=" rounded-2xl shadow-lg  transition-all duration-500 border-dark/65 w-96 h-72"
                            alt="Img"
                        />
                        <motion.div
                            className="overlay flex flex-col"
                            initial={{ clipPath: "circle(0% at 50% 50%)" }}
                            animate={{ clipPath: hovered ? "circle(70.7% at 50% 50%)" : "circle(0% at 50% 50%)" }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="absolute top-2 underline font-semibold">Technologies used in this project.</h1>
                            <div className="grid grid-cols-3 mx-3 gap-2">
                                <Skills name='React' img='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/react.svg' />
                                <Skills className='bg-light' name='Nextjs' img='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/nextjs-icon.svg' />
                                <Skills name='Html' img='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/html5.svg' />
                                <Skills name='Firebase' img='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/firebase.svg' />
                                <Skills name='Javascript' img='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/javascript.svg' />
                                <Skills name='Nodejs' img='https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png' />
                                <Skills name='Tailwind' img='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/tailwindcss-icon.svg' />
                                <Skills name='Mongodb' img='https://www.svgrepo.com/show/331488/mongodb.svg' />
                                <Skills className='bg-[#f9f9f9]' name='Prisma' img='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/prisma-icon.svg' />
                                <Skills name='Typescript' img='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/typescript-icon.svg' />
                            </div>
                        </motion.div>
                        <motion.div
                            className='w-[101%] h-[101%] rounded-md shadow-lg  absolute -z-10 m-3 m '
                        ></motion.div>
                    </motion.div>
                    <motion.div className="flex-1  md:!transform-none flex-col gap-6" style={{ y }}>
                        <h2 className="text-6xl font-bold md:text-5xl">{item.title}</h2>
                        <span className="text-[14rem] font-extrabold opacity-10  bottom-2 absolute right-0 text-center">{id}</span>
                        <p className="text-gray-500  text-lg md:text-lg">{item.desc}</p>
                        <button rel="noopener noreferrer" className=" bg-orange-500  text-black text-center rounded-lg cursor-pointer w-fit p-3 ">
                            <a href={item.git_link} target="_blank" className="flex items-center cursor-pointer
  justify-center">
                                Code
                                &nbsp;<svg class="w-6 h-6  text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
                                </svg>
                            </a>
                        </button> &nbsp;&nbsp;
                        <button rel="noopener noreferrer" className=" bg-orange-500 text-black text-center rounded-lg cursor-pointer w-fit p-3 ">
                            <a href={item.live_link} target="_blank" className="flex  cursor-pointer
 items-center justify-center">
                                Try it live
                                &nbsp;             <svg class=" w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">

                                    <path fill-rule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clip-rule="evenodd" />
                                </svg>

                            </a>
                        </button>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset:["end end","start start"]
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <>
            <Transition />
            <Layout className="relative w-[100vw] h-full px-2 md:!p-6 " ref={ref}>
                <AnimatedText className='mb-16 text-center lg:!text-7xl sm:!mb-8 md:!text-6xl xs:!text-4xl ' text='Imagination Trumps Knowledge' />
                <motion.h2 className='text-6xl rounded-xl font-bold md:sticky md:top-2 py-4  w-full text-center lg:text-4xl sm:text-4xl  xs:text-2xl mast bg-clip-text sm:text-black sm:bg-orange-500 sm:bg-none '>
                    ✨ &nbsp;   Featured Projects  &nbsp; ✨
                    {/* <motion.div style={{ scaleX }} className="h-[5px] rounded-full  w-[100vw] mt-4 bg-dark"></motion.div> */}
                </motion.h2>

                <div className="flex items-center justify-center flex-col py-12 md:py-0 text-center ">
                    {items.map((item) => (<Single id={item.id} item={item} key={item.id} />))}
                </div>
            </Layout>
        </>

    );
};

export default Portfolio;
