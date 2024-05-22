import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Menu, MenuItem } from "@mui/material";
import ArrowRight from "../../assets/svg/lila-arrow-right.svg";
import Logo from "../../assets/LogoA_celestemedio.png";
import "./Header.scss";

interface HeaderProps {
  homeRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const Header: React.FC<HeaderProps> = ({
  homeRef,
  skillsRef,
  experienceRef,
  aboutRef,
  contactRef,
}) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    handleLanguageClose();
  };

  useEffect(() => {
    const handleScroll = () => {
      handleLanguageClose();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <img src={Logo} alt="Julian Aquino Logo" />

      <ul className="header__nav">
        <li onClick={() => handleScrollTo(homeRef)}>
          <span className="header__bar">/ </span>
          {t("home")}
        </li>
        <li onClick={() => handleScrollTo(skillsRef)}>
          <span className="header__bar">/ </span>
          {t("skills")}
        </li>
        <li onClick={() => handleScrollTo(experienceRef)}>
          <span className="header__bar">/ </span>
          {t("experience")}
        </li>
        <li onClick={() => handleScrollTo(aboutRef)}>
          <span className="header__bar">/ </span>
          {t("about")}
        </li>
        <li onClick={handleLanguageClick}>
          <LanguageIcon /> {i18n.language.toUpperCase()}{" "}
          {menuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </li>
        <li onClick={() => handleScrollTo(contactRef)}>
          {t("contact")} <img src={ArrowRight} alt="arrow right" />
        </li>
      </ul>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLanguageClose}
        className="header__language-menu"
      >
        <MenuItem onClick={() => handleLanguageChange("en")}>English</MenuItem>
        <MenuItem onClick={() => handleLanguageChange("es")}>Español</MenuItem>
      </Menu>
    </div>
  );
};
