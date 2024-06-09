import React, { Component } from "react";
import gerb from "./../../assets/home/home_banner/gerb.png";
import ecodemi from "./../../assets/home/home_banner/ecodemi.png";
import letsdoit from "./../../assets/home/home_banner/letsdoit.png";

export default class MainPageBanner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="green-banner">
          <h2>100% of our profits go towards our mission</h2>
        </div>
        <div className="banner-images">
          <div className="banner__img_wrapper">
            <img src={gerb} alt="gerb" />
          </div>
          <div className="banner__img_wrapper">
            <img src={ecodemi} alt="gerb" />
          </div>
          <div className="banner__img_wrapper">
            <img src={letsdoit} alt="gerb" />
          </div>
        </div>
      </div>
    );
  }
}
