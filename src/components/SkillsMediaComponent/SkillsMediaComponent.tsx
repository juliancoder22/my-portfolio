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
          <LinkedInIcon className="skills-media__icon" />
        </li>
        <li>
          <GitHubIcon className="skills-media__icon" />
        </li>
        <li>
          <EmailIcon className="skills-media__icon" />
        </li>
      </ul>
      <img src={VerticalLine} className="skills-media__vertical" />
      <img src={HorizontalLine} className="skills-media__horizontal" />
    </div>
  );
};
