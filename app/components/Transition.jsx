// 'use client'
// import React from 'react';
// import { motion } from 'framer-motion';

// const Transition = () => {
//   return (
//     <>
//       <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary"
//       initial={{x:"100%",width:"100%"}}
//       animate={{x:"0%",width:"0%"}}
//       transition={{duration:0.8,ease:"easeInOut"}}
//       />
//       <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-red-500"
//       initial={{x:"100%",width:"100%"}}
//       animate={{x:"0%",width:"0%"}}
//       transition={{delay:0.2,duration:0.8,ease:"easeInOut"}}
//       />
//       <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-yellow-500"
//       initial={{x:"100%",width:"100%"}}
//       animate={{x:"0%",width:"0%"}}
//       transition={{delay:0.4,duration:0.8,ease:"easeInOut"}}
//       />
//     </>
//   );
// };

// export default Transition;
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Transition = () => {
    const numBars = 10; // Number of bars
    const delayIncrement = 0.1; // Delay increment for each bar
    const controlsArray = [...Array(numBars)].map(() => useAnimation()); // Array to hold animation controls

    useEffect(() => {
        controlsArray.forEach((controls, index) => {
            const animation = controls.start({
                height: ['0%', '100%'],
                transition: {duration: 0.5, ease: 'easeInOut' },
            });

            // Set the height to 0% after the animation completes
            animation.then(() =>
                setTimeout(() => {
                    controls.start({
                        height:"0%",
                        transition: {   delay: delayIncrement * index + 0.1, duration: 0.5, ease: 'easeInOut' },
                    })
                }, 600)

            );
        });

        return () => {
            controlsArray.forEach(controls => controls.stop());
        };
    }, [controlsArray, delayIncrement, numBars]);

    return (
        <>
            {[...Array(numBars)].map((_, index) => (
                <motion.div
                    key={index}
                    className="fixed top-0 w-[15%] h-screen z-30 bg-dark sm:!hidden"
                    style={{ left: `${(index / numBars) * 100}%` }}
                    initial={{ height: '100%' }}
                    // animate={{ height: ['100%', '0%'] }}
                    // transition={{ delay: delayIncrement * index + 0.1, duration: 0.9, ease: 'easeInOut' }}
                    animate={controlsArray[index]}
                />
            ))}
        </>
    );
};

export default Transition;







