import React, { useRef } from "react";
import { AboutComponent } from "./components/AboutComponent/AboutComponent";
import { ContactComponent } from "./components/ContactComponent/ContactComponent";
import { ExperienceComponent } from "./components/ExperienceComponent/ExperienceComponent";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import SkillsComponent from "./components/SkillsComponent/SkillsComponent";

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        homeRef={homeRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <div ref={homeRef}>
        <HomeComponent contactRef={contactRef} />
      </div>
      <div ref={skillsRef}>
        <SkillsComponent />
      </div>
      <div ref={experienceRef}>
        <ExperienceComponent />
      </div>
      <div ref={aboutRef}>
        <AboutComponent />
      </div>
      <div ref={contactRef}>
        <ContactComponent />
      </div>
      <Footer />
    </>
  );
}

export default App;
