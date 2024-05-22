import React from "react";
import { useTranslation } from "react-i18next";
import HeaderSection from "../HeaderSection/HeaderSection";
import Line1 from "../../assets/svg/about-line-1.svg";
import Line2 from "../../assets/svg/about-line-2.svg";
import Line3 from "../../assets/svg/about-line-3.svg";
import TrioChevron from "../../assets/svg/trio-chevron.svg";
import Dots from "../../assets/svg/dots.svg";

import "./AboutComponent.scss";

export const AboutComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <HeaderSection title={t("aboutTitle")} subtitle={t("whoAmI")} />
      <p className="about__text">
        {t("hello")}
        <br />
        {t("selfTaught")}
        {t("basedIn")}
        {t("responsiveWebsites")}
        {t("passion")}
      </p>
      <div className="about__first-square"></div>
      <div className="about__second-square"></div>
      <div className="about__third-square"></div>
      <img src={Dots} alt="dots" className="about__dots" />
      <img src={Line1} className="about__line-1" />
      <img src={Line2} className="about__line-2" />
      <img src={Line3} className="about__line-3" />
      <img src={TrioChevron} alt="dots" className="about__trio-chevron" />
    </div>
  );
};
