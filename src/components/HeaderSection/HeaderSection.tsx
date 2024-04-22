import React from 'react';
import Lines from "../../assets/svg/lines.svg";
import "./HeaderSection.scss";

interface HeaderSectionProps {
  title: string;
  subtitle: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ title, subtitle }) => {
  return (
    <div className="header-section">
      <div className="header-section__header-content">
        <h1 className="header-section__title">
          <span>/</span>
          {title}
        </h1>
        <span className="header-section__subtitle">{subtitle}</span>
      </div>
      <img src={Lines} alt="" />
    </div>
  );
};

export default HeaderSection;
