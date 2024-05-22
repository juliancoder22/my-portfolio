import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import VerticalLine from "../../assets/svg/vertical-line.svg";
import "./HomeMediaComponent.scss";

export const HomeMediaComponent = () => {
  return (
    <div className="home-media">
      <ul className="home-media__links">
        <li>
          <a
            href="https://www.linkedin.com/in/juli%C3%A1n-aquino-189b2320a/"
            target="_blank"
          >
            <LinkedInIcon className="home-media__icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/juliancoder22" target="_blank">
            <GitHubIcon className="home-media__icon" />
          </a>
        </li>
        <li>
          <a
            href="mailto:julian.andres.aquino33@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon className="home-media__icon" />
          </a>
        </li>
      </ul>
      <img src={VerticalLine} className="home-media__vertical" />
    </div>
  );
};
