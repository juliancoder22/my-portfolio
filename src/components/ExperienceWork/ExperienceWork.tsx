import "./ExperienceWork.scss";

interface ExperienceWorkProps {
  title: string;
  projectName: string;
  date: string;
  content: string;
  className: string;
}

export const ExperienceWork: React.FC<ExperienceWorkProps> = ({
  title,
  projectName,
  date,
  content,
  className,
}) => {
  return (
    <div className={`experience-work ${className}`}>
      <div className="experience-work__header">
        <div className="left">
          <h2>{title}</h2>
          <h3>- {projectName}</h3>
        </div>
        <div className="right">
          <span>[{date}]</span>
        </div>
      </div>
      <div className="experience-work__content">
        <p>{content}</p>
      </div>
    </div>
  );
};
