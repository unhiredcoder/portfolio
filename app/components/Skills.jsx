'use  client'
import { motion } from "framer-motion";
import { useEffect } from "react";


const TextShpere = () => {

    useEffect(() => {
        const createTagCloud = () => {
            const canvas = document.getElementById('myCanvas');
            const radius = window.innerWidth <= 768 ? 350 : 600;
            const textsize = window.innerWidth <= 768 ? 10 : 20;
            const depth = window.innerWidth <= 768 ? 0.8 : false;
            if (canvas) {
                canvas.width = radius;
                canvas.height = radius;
                window.TagCanvas.Start('myCanvas', '', {
                    textColour: "#08fdd8",
                    outlineColour: "transparent",
                    reverse: true,
                    bgColor: null,
                    depth: depth,
                    minSpeed: 0.03,
                    textHeight: textsize,
                    weight: true,
                    wheelZoom: false,
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
                    <p class="text-light">
                        I am dedicated with a passion for software development, I am driven by the desire to learn and innovate. I am currently pursuing BSC (CS) at @Viva college . My journey in the realm of technology began with an insatiable curiosity and has since evolved into a deep-rooted commitment to mastering various programming languages and web development technologies.
                         <br /> <br />
                        Proficient in JavaScript and Java programming languages. Possess a strong command of web development technologies such as HTML, CSS, React.js, and Node.js. Experienced in database management systems including SQL and MongoDB. Well-versed in version control using Git.
                    </p> <br />
                    <p class="text-light">
                        Throughout my academic journey, I have actively sought opportunities to apply my skills and expand my knowledge.I gained hands-on experience in developing and deploying software solutions. Additionally, I have worked as a Freelance Web Developer and created websites and applications that meet client's unique needs.
                    </p>

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
