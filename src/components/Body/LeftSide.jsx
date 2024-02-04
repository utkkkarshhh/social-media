import React from "react";
import Styles from "./LeftSide.module.css";
import HeroImage from "../../assets/img/388809427820169_484552950.png"

const LeftSide = () => {
  return (
    <div className={Styles.imageSection}>
      <p className={Styles.imageSectionText}>
        Facebook helps you connect and share with the people in your life.
      </p>
      <div className={Styles.image}>
        <img src={HeroImage} alt="Hero" />
      </div>
    </div>
  );
};
export default LeftSide;
