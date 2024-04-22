import HeaderSection from "../HeaderSection/HeaderSection";
import Line1 from "../../assets/svg/about-line-1.svg";
import Line2 from "../../assets/svg/about-line-2.svg";
import Line3 from "../../assets/svg/about-line-3.svg";
import TrioChevron from "../../assets/svg/trio-chevron.svg";
import Dots from "../../assets/svg/dots.svg";

import "./AboutComponent.scss";

export const AboutComponent = () => {
  return (
    <div className="about">
      <HeaderSection title="About me" subtitle="Who am I?" />
      <p className="about__text">
        Hello, I’m Julian Aquino! <br /> I’m a self-taught front-end developer based in
        Buenos Aires, Argentina. I can develop responsive websites from scratch and raise
        them into modern user-friendly web experiences. Transforming my
        creativity and knowledge into a websites has been my passion for over a
        year. I always strive to learn about the newest technologies and
        frameworks.
      </p>
      <div className="about__first-square"></div>
      <div className="about__second-square"></div>
      <div className="about__third-square"></div>
      <img src={Dots} alt="dots" className="about__dots" />
      <img src={Line1} className="about__line-1"/>
      <img src={Line2} className="about__line-2"/>
      <img src={Line3} className="about__line-3"/>
      <img src={TrioChevron} alt="dots" className="about__trio-chevron" />
    </div>
  );
};
