import React, { useRef } from 'react';
import LiIcon from './LiIcon';
import { useScroll, motion } from 'framer-motion';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className="bg-light p-3 rounded-2xl my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex-col items-center justify-between md:w-[80%]  ">
            <LiIcon reference={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }} >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position} &nbsp; <a href={companyLink}>@{company}</a></h3>
                <span className="capitalize font-medium text-dark/75 xs:text-sm">{time} | {address}</span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    );
};




const Experience = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end end"] })
    return (
        <div className="my-64 ">
            <h2 className='text1 font-bold text-6xl mb-32 w-full text-center lg:text-8xl md:!text-5xl'>Experience</h2>
            <div ref={ref} className=" mx-auto w-[75%] relative lg:w-[90%] md:w-full">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 md:top-3 w-[2px] h-full bg-green-600 origin-top md:w-[2px] md:left-[30px] xs:left-[20px]" />

                <ul className='w-full flex flex-col justify-between items-start ml-0 xs:ml-3'>
                    <Details
                        postion='Intermediate Mern Developer'
                        company='Intermediate Mern Developer'
                        time='2021-Present'
                        address='Remote'
                        work='Completed online courses on web development fundamentals.
                            Developed and deployed my first web application using the MERN stack.
                            Participated in coding challenges and competitions, enhancing problem-solving skills.
                            Attended workshops and seminars on emerging technologies.'
                        
                    />
                    <Details
                        postion='Web Developer'
                        company='Self-Taught'
                        time='2021-Present'
                        address='Remote'
                        // work='Achieved the following milestones as a beginner in web development'
                        work='Worked on a team responsible for developing new featureson serveral projects, Developed and deployed my first web application using the MERN stack,
                        Completed online courses on web development fundamentals
                        '

                    />

                    {/* <Details
                        postion='Software Engineer'
                        company='Google'
                        companyLink='www.google.com'
                        time='2022-Present '
                        address='Mountain View, CA'
                        work='Worked on a team responsible for developing new features for Google
                        search engine including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization'

                    />
                    <Details
                        postion='Software Engineer'
                        company='Google'
                        companyLink='www.google.com'
                        time='2022-Present '
                        address='Mountain View, CA'
                        work='Worked on a team responsible for developing new features for Google
                        search engine including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization'

                    />
                    <Details
                        postion='Software Engineer'
                        company='Google'
                        companyLink='www.google.com'
                        time='2022-Present '
                        address='Mountain View, CA'
                        work='Worked on a team responsible for developing new features for Google
                        search engine including improving the accuracy and relevance of search results and
                    developing new tools for data analysis and visualization'

                    /> */}
                </ul>
            </div>

        </div>
    )
}

export default Experience