'use client'
import React, { useRef } from 'react'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
import Transition from '../components/Transition'

const Articles = () => {

    const MotImage = motion(Image)

    function MovingImg({ title, img, link }) {
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const imgRef = useRef(null);

        function handleMouse(event) {
            if (imgRef.current) {
                imgRef.current.style.display = "inline-block";
                x.set(event.pageX);
                y.set(-3);
            }
        }

        function handleMouseLeave(event) {
            if (imgRef.current) {
                imgRef.current.style.display = "none";
                x.set(0);
                y.set(0);
            }
        }

        return (
            <Link onMouseMove={handleMouse} onMouseLeave={handleMouseLeave} href={link} target='_blank'>
                <h2 className='capitalize text-xl font-semibold sm:text-sm hover:underline'>
                    {title}
                </h2>
                <MotImage initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
                    layout='responsive' width='300' height='300' style={{ x: x, y: y }} src={img} alt={title} ref={imgRef} className=' z-10 w-44 hidden absolute rounded-lg md:!hidden' />
            </Link>
        );
    }



    function Article({ img, title, read, link }) {
        return (
            <motion.div
                viewport={{ once: true }}
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
                className='relative w-full p-4 py-6 my-6 rounded-2xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border:dark shadow-lg sm:flex-col'>
                <MovingImg img={img} title={title} link={link} />
                <span className='text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{read}</span>
            </motion.div>
        )
    }
    function FeaturedArticle({ img, title, time, summary, link }) {
        return (
            <div class="card-container">
                <div class="card-image">
                    <Link href={link} className='w-full inline-block cursor-pointer overflow-hidden rounded-lg' target='_blank'>
                        <MotImage width={100} height={100} unoptimized
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            src={img} alt={title} className='w-full  h-auto' />
                    </Link>                    </div>
                <div class="card-body">
                    <h1>
                        {title}
                    </h1>
                    <p class="card-subtitle">
                        {summary}
                    </p>
                    <span class="card-badge card-badge-blue">{time}</span>
                </div>
            </div>
        )
    }


    return (
        <>
    <Transition/>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-4 md:!p-8'>
                <AnimatedText text='Words Can Change The World !' className='mb-16 text-center lg:!text-7xl sm:!mb-8 md:!text-6xl xs:!text-4xl ' />
                <ul className='grid grid-cols-3 gap-16 lg:grid-cols-2 lg:!gap-8 md:!grid-cols-1 md:!gap-y-16'>
                    <div>
                        <FeaturedArticle
                            time='9 min read'
                            title='Welcome to the enchanting world of EJS, where simplicity meets elegance and creativity knows no bounds! 🌟✨'
                            summary='Enter EJS, a templating engine for Node.js that offers a seamless and intuitive way to generate dynamic HTML content with ease.'
                            link={'https://royaldevs.vercel.app/blog/embrace-ejs-a-symphony-of-simplicity-and-elegance-in-web-development'}
                            img='https://media.graphassets.com/resize=height:768,width:1366/Q3yOejJsQlO8kHsKtinb' />
                    </div>
                    <li>
                        <FeaturedArticle
                            time='10 min read'
                            title='💪🏻 Unleashing Supabase: Your Passport to Database Awesomeness'
                            summary="Hey, tech trailblazers! 🌟 Buckle up because we're about to embark on a journey into the fantastical universe of **Supabase**"
                            link={'https://royaldevs.vercel.app/blog/what-is-subapase'}
                            img='https://media.graphassets.com/resize=height:768,width:1366/5UQnhoYTSOSaq1o4yB66' />
                    </li>
                    <li>
                        <FeaturedArticle
                            time='5 min read'
                            title='Welcome to the colorful world of Tailwind CSS, where creativity meets efficiency in web.'
                            summary='Tailwind CSS is a utility-first CSS framework that has been taking the web world by storm! 🌪️💼 Its unique approach to styling not only enhances the attractiveness of your projects but also streamlines your workflow'
                            link={'https://royaldevs.vercel.app/blog/elevate-your-web-design-game-with-tailwind-css'}
                            img='https://media.graphassets.com/resize=height:768,width:1366/qkZ9MpHSwyQshRdMowQF' />
                    </li>
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                <ul>
                    <Article
                        title='
                        React is a free and open-source front-end JavaScript library for building user interfaces based on components. '
                        link={"https://royaldevs.vercel.app/blog/how-to-make-learn-react-js"}
                        read="Read more"
                        img='https://media.graphassets.com/resize=height:768,width:1366/sek44o8fTLauUPA4DWbf'
                    />
                    <Article
                        title='
                        Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.                     '
                        link={"https://royaldevs.vercel.app/blog/how-to-learn-nodejs"}
                        read="Read more"
                        img='https://media.graphassets.com/resize=height:768,width:1366/WcyCEtp5QFy1bvCP9RzZ'
                    />
                    <Article
                        title='
                        Welcome to our blog where we explore the exciting realm of freelancing and how it can be a gateway to financial independence.                    '
                        link={"https://royaldevs.vercel.app/blog/how-to-make-money-online-through-freelancing"}
                        read="Read more"
                        img='https://media.graphassets.com/resize=height:768,width:1366/2tjz1HTbSXw9ipmsT4g9'
                    />
                    <Article
                        title='
                        Welcome to the enchanting world of EJS, where simplicity meets elegance and creativity knows no bounds!                    '
                        link={"https://royaldevs.vercel.app/blog/embrace-ejs-a-symphony-of-simplicity-and-elegance-in-web-development"}
                        read="Read more"
                        img='https://media.graphassets.com/resize=height:768,width:1366/Q3yOejJsQlO8kHsKtinb'
                    />
                    <Article
                        title="
                        In this blog post, we'll delve into three of the most popular frontend frameworks - React, Angular , etc.                    "
                        link={"https://royaldevs.vercel.app/blog/the-rise-of-frontend-frameworks-unveiling-the-power-of-react-angular-and-vue"}
                        read="Read more"
                        img='https://media.graphassets.com/resize=height:768,width:1366/TsnvaGsTQnirYgB0NWlQ'
                    />
                    <Article
                        title='
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quisquam nihil eligendi. Accusantium et nisi fugit id inventore dolor rerum.
                    '
                        link={"/"}
                        read="Read more"
                        img='https://source.unsplash.com/random/500x300/?Cryptocurrency&9'
                    />
                </ul>
            </Layout>
        </main >
        </>
    )
}

export default Articles