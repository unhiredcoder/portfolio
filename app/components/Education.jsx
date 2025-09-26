import React, { useRef } from 'react';
import LiIcon from './LiIcon';
import { useScroll, motion } from 'framer-motion';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className="edu-ex shadow-xl text-light/90 p-3 rounded-2xl my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex-col items-center justify-between md:w-[80%]  ">
            <LiIcon reference={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }} >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
                <span className="capitalize font-medium text-light/75 xs:text-sm">{time} | {place}</span>
                <p className="font-medium w-full  md:text-sm">{info}</p>
            </motion.div>
        </li>
    );
};







const Education = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end end"] })

    return (
        <div className="my-32">
            <h2 className='font-bold text-6xl mb-32 w-full text-center lg:text-8xl md:!text-5xl'>Education</h2>
            <div ref={ref} className=" mx-auto w-[75%] relative lg:w-[90%] md:w-full">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 md:top-3 w-[2px] h-full bg-black origin-top md:w-[2px] md:left-[30px] xs:left-[20px]" />

                <ul className='w-full flex flex-col justify-between items-start ml-0 xs:ml-3'>





                    <Details
                        type='Bachelor Of Science ( Computer Science )'
                        time='2022-2025'
                        place='VIVA College is an institute in Virar, Maharashtra, India, affiliated to the University of Mumbai'
                        info='Completed B.S.C in Computer Science .'
                    />
                    <Details
                        type='Higher Secondary Education (10+2)'
                        time='2019-2022'
                        place='Mahura bal vidyalaya & viva college'
                        info='Completed my 10+2  '
                    />
                    <Details
                        type='Fullstack Web dev course (private institute)'
                        time='2019-2020'
                        place='Comstech-It World'
                        info=''
                    />

                    {/* <Details
                        type='Bachelor Of Science In Computer Science
                        '
                        time='
                        2016-2020 | '
                        place='Massachusetts Institute Of Technology (MIT)'
                        info=' Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial
                        Intelligence.'

                    />


                    <Details
                        type='Bachelor Of Science In Computer Science
                        '
                        time='
                        2016-2020 | '
                        place='Massachusetts Institute Of Technology (MIT)'
                        info=' Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial
                        Intelligence.'

                    /> */}


                    {/* <Details
                        type='Bachelor Of Science In Computer Science
                        '
                        time='
                        2016-2020 | '
                        place='Massachusetts Institute Of Technology (MIT)'
                        info=' Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial
                        Intelligence.'

                    /> */}

                </ul>
            </div>

        </div>
    )
}

export default Education
