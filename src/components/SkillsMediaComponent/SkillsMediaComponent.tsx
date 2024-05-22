import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import VerticalLine from "../../assets/svg/skills-media-vertical-line.svg";
import HorizontalLine from "../../assets/svg/skills-media-horizontal-line.svg";
import "./SkillsMediaComponent.scss";

export const SkillsMediaComponent = () => {
  return (
    <div className="skills-media">
      <ul className="skills-media__links">
      <li>
          <a
            href="https://www.linkedin.com/in/juli%C3%A1n-aquino-189b2320a/"
            target="_blank"
          >
            <LinkedInIcon className="skills-media__icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/juliancoder22" target="_blank">
            <GitHubIcon className="skills-media__icon" />
          </a>
        </li>
        <li>
          <a
            href="mailto:julian.andres.aquino33@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon className="skills-media__icon" />
          </a>
        </li>
      </ul>
      <img src={VerticalLine} className="skills-media__vertical" />
      <img src={HorizontalLine} className="skills-media__horizontal" />
    </div>
  );
};
