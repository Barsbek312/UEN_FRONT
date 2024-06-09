import React from "react";
import Slider from "./Slider";
import CircularMenu from "./CircularMenu";
import MainPageBanner from "./MainPageBanner";
import MountainPart from "./MountainPart";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

const Home = () => {
  return (
    <div>
      <div className="white-bg">
        <Slider />
        <CircularMenu />
        <MainPageBanner />
        <MountainPart />
      </div>
    </div>
  );
};

export default Home;
