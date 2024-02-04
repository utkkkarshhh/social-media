import React from "react";
import Styles from "./Container.module.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Container = () => {
  return (
    <div className={Styles.mainBody}>
      <div className={Styles.container}>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default Container;
