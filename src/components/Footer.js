import React, { Component } from 'react'
import logo from "../assets/logo192.png";
import { FaMailBulk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="upper-footer">
                        <div className="img-title">
                            <img src={logo}
                                height="35"
                                width="35"
                                className="footer-logo"
                                alt="Logo" />
                            <p>United Eco Nations</p>
                        </div>
                        <div className="companies">
                            <ul>
                                <li>
                                    <h2>Companies</h2>
                                </li>
                                <li>
                                    <a href="/aboutus">About us</a>
                                </li>
                                <li>
                                    <a href="/">Security</a>
                                </li>
                                <li>
                                    <a href="/">Cooperation</a>
                                </li>
                                <li>
                                    <a href="/">Partners</a>
                                </li>
                                <li>
                                    <a href="/">Contacts</a>
                                </li>
                            </ul>
                        </div>
                        <div className="help">
                            <ul>
                                <li>
                                    <h2>Help</h2>
                                </li>
                                <li>
                                    <a href="/">Payment</a>
                                </li>
                                <li>
                                    <a href="/">Guarantee</a>
                                </li>
                                <li>
                                    <a href="/">Tech. Support</a>
                                </li>
                                <li>
                                    <a href="/">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider-footer" />
                    <div className="lower-footer">
                        <div className="left-credits">
                            <p>United Eco Nations</p>
                            <p>Since 2024</p>
                        </div>
                        <div className="contact-icons-footer">
                            <a href="/"><FaMailBulk /></a>
                            <a href="/"><FaInstagram /></a>
                            <a href="/"><FaTelegramPlane /></a>
                            <a href="/"><FaTwitter /></a>
                            <a href="/"><FaTiktok /></a>
                            <a href="/"><FaWhatsapp /></a>
                            <a href="/"><FaFacebookF /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
