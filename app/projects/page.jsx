'use client'
import Transition from "../components/Transition";
import { StickyScroll } from "../components/sticky-scroll-reveal";



const Portfolio = () => {

  const content = [
    {
      title: "SpaceX - (REDESIGN)",
      live_link: "https://artbyadi44.netlify.app",
      code_link: "",
      technologies: [
        { name: 'Css3', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/css3.svg' },
        { name: 'Html', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/html5.svg' },
        { name: 'Javascript', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/javascript.svg' },
      ],
      description: "A redesign concept for SpaceX's website, aiming for a modern and sleek look. The design focuses on enhancing user experience and showcasing SpaceX's achievements in an engaging manner.",
      content: (
        <img className='rounded-xl shadow-2xl' src="/spacex.png" alt="Image 1" />
      ),
    },
    {
      title: "Fitclub - A gym site",
      live_link: "https://artbyadi00.pages.dev",
      code_link: "",
      technologies: [
        { name: 'Reactjs', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/react.svg' },
        { name: 'Framer Motion', img: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
      ],
      description: "Fitclub is a dynamic website catering to fitness enthusiasts, offering a comprehensive range of services from workout plans to nutrition guidance. Its intuitive interface and smooth animations make it a delight to use.",
      content: (
        <img className='rounded-xl shadow-2xl' src="/gym.png" alt="Image 2" />
      ),
    },
    {
      title: "MelodyBox - A mp3 music player (Fullstack)",
      live_link: "https://melodybox.netlify.app",
      code_link: "",
      technologies: [
        { name: 'Html', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/html5.svg' },
        { name: 'Css3', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/css3.svg' },
        { name: 'Javascript', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/javascript.svg' },
        { name: 'Node.js', img: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png' },
        { name: 'Firebase', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/firebase.svg' },
        { name: 'MongoDB', img: 'https://www.svgrepo.com/show/331488/mongodb.svg' },
      ],
      description: "MelodyBox is a full-stack MP3 music player application, allowing users to stream their favorite tracks and create personalized playlists. Powered by Node.js, Firebase, and MongoDB, it provides a seamless listening experience.",
      content: (
        <img className='rounded-xl shadow-2xl' src="/melody.png" alt="Image 2" />
      ),
    },
    {
      title: "Nextjs Auth System (Login/Signup)",
      live_link: "https://nextauthsystem.onrender.com",
      code_link: "https://github.com/unhiredcoder/next_auth_system",
      technologies: [
        { name: 'Nextjs', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/react.svg' },
        { name: 'Firebase', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/firebase.svg' },
        { name: 'Ant Design', img: 'https://static-00.iconduck.com/assets.00/ant-design-icon-512x512-xbdsnx83.png' },
        { name: 'MongoDB', img: 'https://www.svgrepo.com/show/331488/mongodb.svg' },
      ],
      description: "Nextjs Auth System is a robust authentication system built with Next.js, Firebase, and Ant Design. It offers secure user authentication functionalities such as login and signup, with MongoDB as the backend database for data storage.",
      content: (
        <img className='rounded-xl shadow-2xl' src="/nextauth.png" alt="Image 2" />
      ),
    },
    {
      title: "Mini Product management (CRUD)",
      live_link: "https://shopsmart.vercel.app",
      code_link: "https://github.com/unhiredcoder/CRUDfrontend",
      technologies: [
        { name: 'React', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/react.svg' },
        { name: 'Node.js', img: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png' },
        { name: 'Express', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/express.svg' },
        { name: 'MongoDB', img: 'https://www.svgrepo.com/show/331488/mongodb.svg' },
      ],
      description: "Mini Product Management is a CRUD application designed to streamline product management tasks. Built using React and Node.js with Express, it offers simple yet powerful functionalities for creating, reading, updating, and deleting products.",
      content: (
        <img className='rounded-xl shadow-2xl' src="/CRUD.png" alt="Image 2" />
      ),
    },
    {
      title: "C2P ventures ( A dynamic web/app dev agency)",
      live_link: "https://c2pventures.com",
      code_link: "",
      technologies: [
        { name: 'Html', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/html5.svg' },
        { name: 'Css3', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/css3.svg' },
        { name: 'Javascript', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/javascript.svg' },
        { name: 'NodeMailer', img: 'https://repository-images.githubusercontent.com/1272424/d1995000-0ab7-11ea-8ed3-04a082c36b0d' },
      ],
      description: "C2P ventures is a dynamic web and app development agency specializing in creating innovative solutions for businesses. With expertise in HTML, CSS, JavaScript, and Node.js, we deliver tailor-made digital experiences that drive growth and success.",
      content: (
        <img className='rounded-xl shadow-2xl' src="/c2p.png" alt="Image 2" />
      ),
    },
    {
      title: "Code2pdf - Transform your code into PDFs",
      live_link: "https://code2pdf.onrender.com",
      code_link: "",
      technologies: [
        { name: 'Html', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/html5.svg' },
        { name: 'Css3', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/css3.svg' },
        { name: 'Javascript', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/javascript.svg' },
        { name: 'Node.js', img: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png' },
        { name: 'Express', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/express.svg' },
      ],
      description: "Code2pdf is a tool that simplifies the process of transforming your code into PDFs. Built with HTML, CSS, JavaScript, Node.js, and Express, it offers a convenient solution for developers to generate printable documents from their code snippets.",
      content: (
        <img className='rounded-xl shadow-2xl' src="/code2pdf.png" alt="Image 2" />
      ),
    },
    {
      title: "Trek Exotic - Luxury hotels & rooms",
      live_link: "https://657c046a92e1ef4656686a8f--amazing-cranachan-eea771.netlify.app",
      code_link: "",
      technologies: [
        { name: 'Html', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/html5.svg' },
        { name: 'Css3', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/css3.svg' },
        { name: 'Javascript', img: 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/javascript.svg' },
        { name: 'Gsap', img: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg' },
      ],
      description: "Trek Exotic offers a luxurious experience for travelers, featuring a curated selection of luxury hotels and rooms. With HTML, CSS, and JavaScript, we bring stunning visuals and seamless navigation to showcase the beauty of these destinations.",
      content: (
        <img className='rounded-xl shadow-2xl' src="/trek.png" alt="Image 2" />
      ),
    }
  ];
  return (
    <>
      <head>
        <title>Unhired Coder - Projects</title>
      </head>
      <Transition />
      <StickyScroll content={content} />
    </>

  );
};

export default Portfolio;
