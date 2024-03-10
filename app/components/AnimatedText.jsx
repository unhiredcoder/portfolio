'use client'
import { motion } from 'framer-motion';
import React from 'react';

const AnimatedText = ({ text, className = "" }) => {

    const letterVariants = {
        initial: {
            opacity: 0,
            // scale: 2,
            y: 20,
            // x: 20,
            // rotateX: -180,
        },
        animate: {
            opacity: 1,
            // scale: 1,
            y: 0,
            // x: 0,
            // rotateX: 0,
            transition: {
                duration: 0.5,
                ease: [0.175, 0.85, 0.42, 0.96], // Custom easing function
            },
        },
    };

    

    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-left overflow-hidden  '>
            <motion.span
            // style={{backgroundImage: '-webkit-gradient(linear, left top, right top, from(#079de0), to(#3aecba))'}}
                transition={{ staggerChildren: 0.05, delayChildren: 0.5 }}
                initial="initial"
                animate="animate"
                className={`inline-block break-word   font-bold  text-dark text-8xl w-full ${className}`}
            >
                {text.split(" ").map((word, idx) => (
                    <div
                    className=''
                    key={idx} style={{ display: 'inline-block' }}>
                        {word.split("").map((letter, idx2) => (
                            <motion.span variants={letterVariants} key={letter + '-' + idx2} className=' inline-block'>
                                {letter}
                            </motion.span>
                        ))}
                        {idx < text.split(" ").length - 1 && <span className='mx-2 md:mx-1'></span>}
                    </div>
                ))}
            </motion.span>
        </div>
    );
};

export default AnimatedText;
