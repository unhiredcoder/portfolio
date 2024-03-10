import React from 'react';
import { motion, useScroll } from 'framer-motion';

const LiIcon = ({ reference }) => {
    const { scrollYProgress } = useScroll({ 
        target: reference,
        offset: ["center end", "center center"]
    });

    return (
        <figure className="absolute left-0 md:-left-2 -mt-6 stroke-dark">
            <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-lg xs:h-lg" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="15" className="stroke-primary stroke-1 fill-none" />
                <motion.circle
                    style={{ pathLength: scrollYProgress }}
                    cx="75"
                    cy="50"
                    r="15"
                    className="stroke-green-600 stroke-[3px] fill-light"
                />
                <circle cx="75" cy="50" r="7" className="animate-pulse stroke-0 fill-green-600" />
            </svg>
        </figure>
    );
};

export default LiIcon;













// import React from 'react';
// import { motion, useScroll } from 'framer-motion';

// const LiIcon = ({ reference }) => {
//     const { scrollYProgress } = useScroll({ 
//         target: reference,
//         offset: ["center end", "center center"]
//     });

//     return (
//         <figure className="absolute -md:left-2 -mt-6 md:-mt-0 stroke-dark">
//             <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-lg xs:h-lg" width="75" height="75" viewBox="0 0 100 100">
//                 <circle cx="75" cy="50" r="15" className="stroke-primary stroke-1 fill-none" />
//                 <motion.circle
//                     style={{ pathLength: scrollYProgress }}
//                     cx="75"
//                     cy="50"
//                     r="15"
//                     className="stroke-red-600 stroke-[2px] fill-light"
//                 />
//                 <circle cx="75" cy="50" r="7" className="animate-pulse stroke-0 fill-green-600" />
//             </svg>
//         </figure>
//     );
// };

// export default LiIcon;
