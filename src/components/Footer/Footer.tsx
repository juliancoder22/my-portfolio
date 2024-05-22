import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.scss";
import ArrowRight from "../../assets/svg/lila-arrow-right.svg";
import profile from "../../assets/LogoA_celestemedio.png";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <img src={profile} alt="" className="footer__profile" />
      <ul className="footer__list">
        <li>
          <a
            href="https://www.linkedin.com/in/juli%C3%A1n-aquino-189b2320a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("linkedin")} [ <img src={ArrowRight} alt="arrow right" /> ]
          </a>
        </li>
        <li>
          <a
            href="https://github.com/juliancoder22"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("github")} [ <img src={ArrowRight} alt="arrow right" /> ]
          </a>
        </li>
        <li>
          <a
            href="mailto:julian.andres.aquino33@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("email")} [ <img src={ArrowRight} alt="arrow right" /> ]
          </a>
        </li>
      </ul>
      <span>{t("websiteCreated")} Julián Aquino</span>
    </footer>
  );
};

export default Footer;
