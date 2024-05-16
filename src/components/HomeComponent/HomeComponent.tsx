import { useEffect, useState } from "react";
import Points from "../../assets/svg/dots.svg";
import ArrowRight from "../../assets/svg/arrow-right.svg";
import TrioChevron from "../../assets/svg/trio-chevron.svg";
import "./HomeComponent.scss";
import { HomeMediaComponent } from "../HomeMediaComponent/HomeMediaComponent";

const HomeComponent = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [writingIndex, setWritingIndex] = useState(0);
  const [writingProfessionIndex, setWritingProfessionIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const originalName = "Julian Aquino";
    const intervalId = setInterval(() => {
      if (writingIndex < originalName.length) {
        setName((prevName) => prevName + originalName[writingIndex]);
        setWritingIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 110);

    return () => clearInterval(intervalId);
  }, [writingIndex]);

  useEffect(() => {
    const originalProfession = "web developer";
    const intervalId = setInterval(() => {
      if (writingProfessionIndex < originalProfession.length) {
        setProfession(
          (prevProfession) =>
            prevProfession + originalProfession[writingProfessionIndex]
        );
        setWritingProfessionIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 110);

    return () => clearInterval(intervalId);
  }, [writingProfessionIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home">
      <HomeMediaComponent />
      <div className="home__first-square"></div>
      <div className="home__second-square"></div>
      <span className="home__scroll">[SCROLL]</span>
      <img src={Points} alt="points" className="home__points" />
      <h1 className="home__name">
        Hey! I'm <span className="home__lila">{name}</span>
      </h1>
      <h2 className="home__profession">
        I'm a <span className="home__lila">{profession}</span>
      </h2>
      <button className="home__talk">
        Let’s talk <img src={ArrowRight} alt="arrow right" />
      </button>
      {isSmallScreen && (
        <img
          src={TrioChevron}
          alt="trio chevron"
          className="home__trio-chevron"
        />
      )}
    </div>
  );
};

export default HomeComponent;
