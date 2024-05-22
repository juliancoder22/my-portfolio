import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Envelope from "../../assets/svg/envelope.svg";
import "./ContactComponent.scss";
import { useTranslation } from "react-i18next";

export const ContactComponent = () => {
  const { t } = useTranslation();

  const copyEmail = () => {
    navigator.clipboard.writeText("julian.andres.aquino33@gmail.com");
  };

  return (
    <div className="contact">
      <h1 className="contact__section-title">{t("contact")}</h1>
      <h1 className="contact__title">{t("letsWorkTogether")}</h1>
      <p className="contact__text">{t("openToOpportunity")}</p>
      <h2 className="contact__contact-me">
        <span>
          <img src={Envelope} alt="envelope" />
        </span>{" "}
        julian.andres.aquino33@gmail.com
        <ContentCopyIcon onClick={copyEmail} className="contact__copy" />
      </h2>
    </div>
  );
};
