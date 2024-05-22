import React from "react";
import { useTranslation } from "react-i18next";
import { ExperienceWork } from "../ExperienceWork/ExperienceWork";
import HeaderSection from "../HeaderSection/HeaderSection";
import "./ExperienceComponent.scss";

export const ExperienceComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="experience">
      <HeaderSection title={t("experience")} subtitle={t("projectsDone")} />

      <div className="experience__company-square">
        <span>{t("loop3")}</span>
      </div>

      <div className="experience__experiences">
        <ExperienceWork
          title={t("anthos.title")}
          projectName={t("anthos.projectName")}
          date={t("anthos.date")}
          content={t("anthos.content")}
          className="anthos"
        />
        <ExperienceWork
          title={t("madcave.title")}
          projectName={t("madcave.projectName")}
          date={t("madcave.date")}
          content={t("madcave.content")}
          className="madcave"
        />
      </div>

      <div className="experience__first-square"></div>
      <div className="experience__second-square"></div>
      <div className="experience__third-square"></div>
    </div>
  );
};
