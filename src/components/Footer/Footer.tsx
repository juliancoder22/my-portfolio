import "./Footer.scss";
import ArrowRight from "../../assets/svg/lila-arrow-right.svg";
import profile from "../../assets/LogoA_celestemedio.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={profile} alt="" className="footer__profile" />
      <ul className="footer__list">
        <li>
          <a href="#">
            linkedin [ <img src={ArrowRight} alt="arrow right" /> ]
          </a>
        </li>
        <li>
          <a href="#">
            github [ <img src={ArrowRight} alt="arrow right" /> ]
          </a>
        </li>
        <li>
          <a href="#">
            whatsapp [ <img src={ArrowRight} alt="arrow right" /> ]
          </a>
        </li>
        <li>
          <a href="#">
            email [ <img src={ArrowRight} alt="arrow right" /> ]
          </a>
        </li>
      </ul>
      <span>© Website Created by Julián Aquino</span>
    </footer>
  );
};
