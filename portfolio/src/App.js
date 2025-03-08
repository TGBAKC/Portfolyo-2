import React, { useRef } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero"; 
import AboutMe from "./component/AboutMe";
import MyWorkSection from "./component/MyWorkSection";
import Contact from "./component/Contact";

function App() {
  const heroRef = useRef(null);  
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>

      <Navbar 
        heroRef={heroRef}
        aboutRef={aboutRef} 
        projectsRef={projectsRef} 
        contactRef={contactRef} 
      />

   
      <div ref={heroRef}>
        <Hero />
      </div>

      <div ref={aboutRef}>
        <AboutMe />
      </div>
      
      <div ref={projectsRef}>
        <MyWorkSection />
      </div>
      
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default App;

