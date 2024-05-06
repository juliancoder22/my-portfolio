import { useState } from "react";
import Points from "../../assets/svg/dots.svg";
import TrioChevron from "../../assets/svg/trio-chevron.svg";
import Square from "../../assets/svg/square.svg";
import "./SkillsComponent.scss";
import SectionHeader from "../HeaderSection/HeaderSection";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { SkillsMediaComponent } from "../SkillsMediaComponent/SkillsMediaComponent";

function SkillsComponent() {
  const [frontendExpanded, setFrontendExpanded] = useState(false);
  const [backendExpanded, setBackendExpanded] = useState(false);

  const toggleFrontendExpanded = () => {
    setFrontendExpanded(!frontendExpanded);
  };

  const toggleBackendExpanded = () => {
    setBackendExpanded(!backendExpanded);
  };

  return (
    <div className="skills-component">
      <SkillsMediaComponent />
      <SectionHeader title="skills" subtitle="What can I do?" />
      <div className="skills-component__content">
        <div className="skills-component__content-info">
          <div className="skills-component__frontend">
            <div className="skills-component__frontend-header">
              <h2>Frontend</h2>
              <button onClick={toggleFrontendExpanded}>
                {frontendExpanded ? <RemoveIcon /> : <AddIcon />}
              </button>
            </div>
            <div
              className={`skills-component__frontend-content ${
                frontendExpanded ? "expanded" : "expand-from-top"
              }`}
            >
              <p>
                Proficient in React, Redux, and Redux Toolkit for building
                interactive and dynamic user interfaces. Experience using
                TypeScript to enhance code frontend solidity and scalability.
                Experience with testing frameworks like Jest or Vitest for
                comprehensive frontend testing.
              </p>
            </div>
          </div>
          <div className="skills-component__backend">
            <div className="skills-component__backend-header">
              <h2>Backend</h2>
              <button onClick={toggleBackendExpanded}>
                {backendExpanded ? <RemoveIcon /> : <AddIcon />}
              </button>
            </div>
            <div
              className={`skills-component__backend-content ${
                backendExpanded ? "expanded" : "expand-from-top"
              }`}
            >
              <p>
                Proficient in React, Redux, and Redux Toolkit for building
                interactive and dynamic user interfaces. Experience using
                TypeScript to enhance code frontend solidity and scalability.
                Experience with testing frameworks like Jest or Vitest for
                comprehensive frontend testing.
              </p>
            </div>
          </div>
        </div>
        <div className="skills-component__content-skills">
          <img
            src={TrioChevron}
            alt="dots"
            className="skills-component__trio-chevron"
          />
          <img src={Points} alt="dots" className="skills-component__dots" />
          <img src={Square} alt="square" className="skills-component__square" />
          <div className="skills-component__languages">
            <h3>Languages</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Java</li>
            </ul>
          </div>

          <div className="skills-component__frameworks">
            <h3>Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Redux Toolkit</li>
              <li>Spring</li>
              <li>Jest</li>
              <li>Vitest</li>
            </ul>
          </div>

          <div className="skills-component__tools">
            <h3>Tools</h3>
            <ul>
              <li>ViteJS</li>
              <li>SASS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsComponent;
