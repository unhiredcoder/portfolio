// import { motion } from 'framer-motion'
// import React from 'react'

// const Skills = () => {


//     function Skills({ name, x, y,className:style="bg-dark" }) {
//         return (
//             <motion.div className={`flex items-center justify-center rounded-full ${style} font-semibold absolute py-3 px-3  text-light`}
//             initial={{x:0,y:0}}
//             animate={{x:x,y:y}}
//             transition={{duration:1.5}}
//             >
//                 <img src={name}  width={30} height={30} />
//             </motion.div>
//         )
//     }


//     return (
//         <>
//             <h2 className='font-bold mt-64 w-full text-8xl text-center '>Skills</h2>
//             <div className="w-full h-screen relative bg-circularLight flex items-center justify-center rounded-full">
//                 <motion.div className="flex items-center justify-center rounded-full font-semibold text-3xl text-light">
//                     🕸️
//                 </motion.div>
//                 <Skills name='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/react.svg' x='-5vw' y='-10vw' />
//                 <Skills className='bg-light' name='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/nextjs-icon.svg' x='-20vw' y='2vw' />
//                 <Skills name='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/html5.svg' x='-20vw' y='-15vw' />
//                 <Skills name='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/firebase.svg' x='20vw' y='10vw' />
//                 <Skills name='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/javascript.svg' x='-2vw' y='20vw' />
//                 <Skills name='https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png' x='32vw' y='-5vw' />
//                 <Skills name='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/tailwindcss-icon.svg' x='32vw' y='-12vw' />
//                 <Skills name='https://www.svgrepo.com/show/331488/mongodb.svg' x='0vw' y='-20vw' />
//                 <Skills className='bg-[#f9f9f9]' name='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/prisma-icon.svg' x='25vw' y='18vw' />
//                 <Skills name='https://raw.githubusercontent.com/prplx/svg-logos/master/svg/typescript-icon.svg' x='-18vw' y='18vw' />
//             </div>
//         </>
//     )
// }

// export default Skills













// import React from 'react'

// const Skills = () => {
//   return (
//     <div  className='bg-red-500 w-full'>Skills</div>
//   )
// }

// export default Skills


// 'use  client'
// import React from 'react';
// import TagCloud from 'react3dtagcloud';

// const MyTagCloud = () => {
//   const tagName = [
//     "HTML",
//     "CSS",
//     "SASS",
//     "JavaScript",
//     "React",
//     "Vue",
//     "Nuxt",
//     "NodeJS",
//     "Babel",
//     "Jquery",
//     "ES6"
//   ];

//   return (
//     <div style={{ 
//       position: 'relative', 
//       top: '50%', 
//       left: '50%', 
//       transform: 'translate(-50%, -50%)', 
//       backgroundColor: 'black', 
//       width: '100%', 
//       height: '100%' 
//     }}>
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
//         <TagCloud radius={200} tagName={tagName} />
//       </div>
//     </div>
//   );
// };

// export default MyTagCloud;














'use  client'
// import TagCloud from "TagCloud";
import { motion } from "framer-motion";
import { useEffect } from "react";


const TextShpere = () => {
    // useEffect(() => {
    //     // return () => {
    //     const container = ".tagcloud";
    //     const texts = [
    //         "HTML",
    //         "CSS",
    //         "SASS",
    //         "JavaScript",
    //         "React",
    //         "NodeJS",
    //         "MongoDB",
    //         "Express.js",
    //         "Supabase",
    //         "Firebase",
    //         "Hygraph CMS",
    //         "EJS",
    //         "Next.js",
    //         "Cloudinary",
    //         "Git",
    //         "GitHub",
    //         "Prisma",
    //         "REST Apis",
    //         "Tailwind",
    //         "Typescript"
    //     ];

    //     const radius = window.innerWidth <= 768 ? 180 : 300;
    //     const options = {
    //         radius: radius,
    //         maxSpeed: 'fast',
    //         initSpeed: 'fast',
    //         keep: true
    //     };
    //     TagCloud(container, texts, options);
    //     // };
    // }, []);



    useEffect(() => {
    const createTagCloud = () => {
        const canvas = document.getElementById('myCanvas');
        const radius = window.innerWidth <= 768 ? 350 : 600;
        const textsize = window.innerWidth <= 768 ? 10 :20;
        const depth = window.innerWidth <= 768 ? 0.8 : false;
        if (canvas) {
            canvas.width = radius;
            canvas.height = radius;
            window.TagCanvas.Start('myCanvas', '', {
                textColour: "#08fdd8",
                outlineColour: "transparent",
                reverse: true,
                bgColor:null,
                depth:depth,
                minSpeed: 0.03,
                textHeight:textsize,	
                weight:true,
                wheelZoom:false,
                maxSpeed: 0.05,
                weight: true,
                pinchZoom: false,
                shuffleTags: true,
                dragControl: true,
            });

        }
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/jquery-tagcanvas@2.9.0/tagcanvas.min.js';
    script.async = true;
    script.onload = createTagCloud;
    document.body.appendChild(script);

}, []);


    return (
        <>
            <div className="kk rounded-3xl shadow-xl grid place-content-center grid-cols-2 mt-32 lg:py-2 lg:px-1 md:text-sm md:py-1.5  lg:grid-cols-1">
                <div className="
                grid-cols-2">
                    <h2 className="text-light pt-16 text-left font-bold text-6xl mb-22 w-full p-3 !md:text-4xl !sm:text-3xl !xs:text-2xl">Me, Myself and I</h2>
                    <div class="p-3 text-light">
                        <h3 class="text-xl font-semibold mb-2">Skills:</h3>
                        <ul class="list-disc ml-5">
                            <li>Proficient in JavaScript and java programming languages</li>
                            <li>Strong knowledge of web development technologies such as HTML, CSS, React.js, and Node.js</li>
                            <li>Experience with database management systems including SQL and MongoDB</li>
                            <li>Familiar with version control using Git</li>
                        </ul>
                    </div>
                    {/* <!-- Experience Section --> */}
                    <div class="p-3 text-light">
                        <h3 class="text-xl font-semibold mb-2">Experience:</h3>
                        <ul class="list-disc ml-5">
                            <li>Completed a Software Developer Internship at XYZ Company during the summer of 2023</li>
                            <li>Worked as a Freelance Web Developer from 2019 to 2022, completing various client projects</li>
                            <li>Participated in multiple hackathons and coding competitions, honing problem-solving skills</li>
                        </ul>
                    </div>

                </div>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 2, type: 'spring', }}
                    whileInView={{ scale: 1 }}
                    className="grid-cols-2 flex items-center justify-center"
                >
                 
                    <canvas id="myCanvas">
                        <span><a href="#" onClick={(e) => e.preventDefault()}>HTML</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>CSS</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>SASS</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>JavaScript</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>React</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>NodeJS</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>MongoDB</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>Express.js</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>Supabase</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>Firebase</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>Hygraph CMS</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>EJS</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>Next.js</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>Cloudinary</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>Git</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>GitHub</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>Prisma</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>REST Apis</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>Tailwind</a></span>
<span><a href="#" onClick={(e) => e.preventDefault()}>Typescript</a></span>


                    </canvas>
                </motion.div>
            </div>
        </>

    );
};

export default TextShpere;









// 'use client'
// import React, { useEffect } from 'react';

// const TagCloud = () => {
//     useEffect(() => {
 

//     return (
//         <div className='bg-white h-screen w-screen grid place-content-center' id="myCanvasContainer">

//         </div>
//     );
// };

// export default TagCloud;



























// 'use client'
// import React, { useEffect } from 'react';

// const Skills = () => {
//   useEffect(() => {
//     const canvas = document.getElementById('canvas');
//     const texts = [
//       'HTML5', 'Javascript', 'Scala', 'Kotlin', 'Erlang',
//       'CSS', 'Python', 'Java', 'PostgreSQL', 'MongoDB',
//       'Android', 'TensorFlow', 'Flask', 'React', 'Redis',
//       'NodeJS', 'OCaml', 'Redux', 'Rx',
//     ];
//     const counts = [1, 2, 4, 5, 4, 2, 1];

//     const options = {
//       tilt: Math.PI / 9,
//       initialVelocityX: 0.09,
//       initialVelocityY: 0.09,
//       initialRotationX: Math.PI * 0.14,
//       initialRotationZ: 0
//     };

//     wordSphere(canvas, texts, counts, options);

//     function wordSphere(canvas, texts, counts, options) {
//       const π = Math.PI;
//       const {
//         width = 500,
//         height = 500,
//         radius = 150,
//         padding = 50,
//         fontSize = 22,
//         tilt = 0,
//         initialVelocityX = 0,
//         initialVelocityY = 0,
//         initialRotationX = 0,
//         initialRotationZ = 0,
//       } = options;

//       let vx = initialVelocityX, vy = initialVelocityY;
//       let rx = initialRotationX, rz = initialRotationZ;

//       let ctx = canvas.getContext('2d');
//       ctx.textAlign = 'center';

//       canvas.width = width * 2;
//       canvas.height = height * 2;
//       canvas.style.width = `${width}px`;
//       canvas.style.height = `${height}px`;
//       ctx.scale(2, 2);

//       let clicked = false, lastX = 0, lastY = 0;
//       canvas.addEventListener('mousedown', event => {
//         clicked = true;
//         lastX = event.screenX;
//         lastY = event.screenY;
//       });
//       canvas.addEventListener('mousemove', event => {
//         if (!clicked) return;
//         const [dx, dy] = [event.screenX - lastX, event.screenY - lastY];
//         [lastX, lastY] = [event.screenX, event.screenY];

//         rz += -dy * 0.01;
//         rx += dx * 0.01;

//         vx = dx * 0.1;
//         vy = dy * 0.1;

//         if (!looping) startLoop();
//       });
//       canvas.addEventListener('mouseup', () => clicked = false);
//       canvas.addEventListener('mouseleave', () => clicked = false);

//       function rot(x, y, t) {
//         return [x * Math.cos(t) - y * Math.sin(t), x * Math.sin(t) + y * Math.cos(t)];
//       }

//       function render() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         let ix = 0, iz = 0;
//         for (const text of texts) {
//           const degZ = (π / (counts.length - 1)) * iz;
//           const degX = (2 * π / counts[iz]) * ix;

//           let x = radius * Math.sin(degZ) * Math.cos(degX);
//           let y = radius * Math.sin(degZ) * Math.sin(degX);
//           let z = radius * Math.cos(degZ) + 8 * (ix % 2);

//           [y, z] = rot(y, z, tilt);
//           [x, z] = rot(x, z, rz);
//           [x, y] = rot(x, y, rx);

//           const alpha = 0.6 + 0.4 * (x / radius);
//           const size = fontSize + 2 + 5 * (x / radius);
//           ctx.fillStyle = `rgba(22,4,23,${alpha})`;
//           ctx.font = `${size}px "Helvetica Neue", sans-serif`;
//           ctx.fillText(text, y + width / 2, -z + height / 2);

//           ix--;
//           if (ix < 0) {
//             iz++;
//             ix = counts[iz] - 1;
//           }
//         }
//       }

//       let looping = false;

//       function rendererLoop() {
//         if (looping) window.requestAnimationFrame(rendererLoop);
//         render();

//         if (vx > 0) vx = vx - 0.01;
//         if (vy > 0) vy = vy - 0.01;
//         if (vx < 0) vx = vx + 0.01;
//         if (vy > 0) vy = vy + 0.01;
//         if (vx === 0 && vy === 0) stopLoop();

//         rz += vy * 0.01;
//         rx += vx * 0.01;
//       }

//       function startLoop() {
//         looping = true;
//         window.requestAnimationFrame(rendererLoop);
//       }

//       function stopLoop() {
//         looping = false;
//       }

//       startLoop();
//     }
//   }, []);

//   return (
//     <canvas id="canvas"></canvas>
//   );
// }

// export default Skills;












