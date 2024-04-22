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
          <LinkedInIcon className="home-media__icon" />
        </li>
        <li>
          <GitHubIcon className="home-media__icon" />
        </li>
        <li>
          <EmailIcon className="home-media__icon" />
        </li>
      </ul>
      <img src={VerticalLine} className="home-media__vertical" />
    </div>
  );
};
