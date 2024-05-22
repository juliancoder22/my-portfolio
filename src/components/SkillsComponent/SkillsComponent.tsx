import { useState } from "react";
import { useTranslation } from "react-i18next";
import Points from "../../assets/svg/dots.svg";
import TrioChevron from "../../assets/svg/trio-chevron.svg";
import Square from "../../assets/svg/square.svg";
import "./SkillsComponent.scss";
import SectionHeader from "../HeaderSection/HeaderSection";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { SkillsMediaComponent } from "../SkillsMediaComponent/SkillsMediaComponent";

function SkillsComponent() {
  const { t } = useTranslation();
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
      <SectionHeader title={t("skills")} subtitle={t("whatCanIDo")} />
      <div className="skills-component__content">
        <div className="skills-component__content-info">
          <div className="skills-component__frontend">
            <div className="skills-component__frontend-header">
              <h2>{t("frontend")}</h2>
              <button onClick={toggleFrontendExpanded}>
                {frontendExpanded ? <RemoveIcon /> : <AddIcon />}
              </button>
            </div>
            <div
              className={`skills-component__frontend-content ${
                frontendExpanded ? "expanded" : "expand-from-top"
              }`}
            >
              <p>{t("frontendDescription")}</p>
            </div>
          </div>
          <div className="skills-component__backend">
            <div className="skills-component__backend-header">
              <h2>{t("backend")}</h2>
              <button onClick={toggleBackendExpanded}>
                {backendExpanded ? <RemoveIcon /> : <AddIcon />}
              </button>
            </div>
            <div
              className={`skills-component__backend-content ${
                backendExpanded ? "expanded" : "expand-from-top"
              }`}
            >
              <p>{t("backendDescription")}</p>
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
            <h3>{t("languages")}</h3>
            <ul>
              <li>{t("html")}</li>
              <li>{t("css")}</li>
              <li>{t("javascript")}</li>
              <li>{t("typescript")}</li>
              <li>{t("java")}</li>
            </ul>
          </div>

          <div className="skills-component__frameworks">
            <h3>{t("frameworks")}</h3>
            <ul>
              <li>{t("react")}</li>
              <li>{t("redux")}</li>
              <li>{t("reduxToolkit")}</li>
              <li>{t("spring")}</li>
              <li>{t("jest")}</li>
              <li>{t("vitest")}</li>
            </ul>
          </div>

          <div className="skills-component__tools">
            <h3>{t("tools")}</h3>
            <ul>
              <li>{t("vitejs")}</li>
              <li>{t("sass")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsComponent;
