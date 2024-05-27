import React, { Component } from "react";
import gerb from "../assets/gerb.png"
import ecodemi from "../assets/ecodemi.png"
import letsdoit from "../assets/letsdoit.png"

export default class MainPageBanner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="green-banner">
                    <h2>100% of our profits go towards our mission</h2>
                </div>
                <div className="banner-images">
                    <img src={ gerb } alt="gerb"/>
                    <img src={ ecodemi} alt="gerb"/>
                    <img src={ letsdoit } alt="gerb"/>
                </div>
            </div>
        )
    }
}