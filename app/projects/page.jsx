'use client'
import { useEffect, useState } from "react";
import Transition from "../components/Transition";
import { StickyScroll } from "../components/sticky-scroll-reveal";



const Projects = () => {

  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/66e6ad35ad19ca34f8a64f6a');
        const data = await response.json();
        setContent(data.record); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <head>
        <title>Unhired Coder | Projects</title>
      </head>
      <Transition />
      {content && <StickyScroll content={content} />}
    </>

  );
};

export default Projects;
