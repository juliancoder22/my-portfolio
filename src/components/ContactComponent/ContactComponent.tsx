import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Envelope from "../../assets/svg/envelope.svg";
import "./ContactComponent.scss";

export const ContactComponent = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("julian.andres.aquino33@gmail.com");
  };

  return (
    <div className="contact">
      <h1 className="contact__section-title">/contact</h1>
      <h1 className="contact__title">Let's work together!</h1>
      <p className="contact__text">
        I’m interested in freelance opportunities. However, if you have other
        request or question, don’t hesitate to contact me
      </p>
      <h2 className="contact__contact-me">
        <span><img src={Envelope} alt="envelope" /></span> julian.andres.aquino33@gmail.com
          <ContentCopyIcon onClick={copyEmail} className="contact__copy"/>
      </h2>
    </div>
  );
};
