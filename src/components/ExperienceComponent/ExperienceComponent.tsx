import { anthos, madcave } from "../../constants/variables/content";
import { ExperienceWork } from "../ExperienceWork/ExperienceWork";
import DoubleChevron from "../../assets/svg/double-chevron.svg";
import HeaderSection from "../HeaderSection/HeaderSection";

import "./ExperienceComponent.scss";

export const ExperienceComponent = () => {
  return (
    <div className="experience">
      <HeaderSection
        title="experience"
        subtitle="What projects have I done??"
      />

      <div className="experience__company-square">
        <span>Loop3</span>
      </div>

      <ExperienceWork
        title={anthos.title}
        projectName={anthos.projectName}
        date={anthos.date}
        content={anthos.content}
        className="anthos"
      />

      <div className="experience__work-connection-one"></div>

      <div className="experience__work-connection-two"></div>

      <img src={DoubleChevron} className="experience__double-chevron" />

      <div className="experience__first-square"></div>
      <div className="experience__second-square"></div>
      <div className="experience__third-square"></div>

      <ExperienceWork
        title={madcave.title}
        projectName={madcave.projectName}
        date={madcave.date}
        content={madcave.content}
        className="madcave"
      />
    </div>
  );
};
