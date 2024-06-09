import React, { Component } from "react";
import logo from "./../../assets/logo/logo192.png";
import { FaMailBulk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import f from "./Footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className={f.footer}>
          <div className={f.img__title_adapted}>
            <img
              src={logo}
              height="35"
              width="35"
              className={f.footer_logo}
              alt="Logo"
            />
            <p>United Eco Nations</p>
          </div>
          <div className={f.upper_footer}>
            <div className={f.img_title}>
              <img
                src={logo}
                height="35"
                width="35"
                className={f.footer_logo}
                alt="Logo"
              />
              <p>United Eco Nations</p>
            </div>
            <div className={f.companies}>
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
            <div className={f.help}>
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
          <div className={f.divider_footer} />
          <div className={f.lower_footer}>
            <div className={f.left_credits}>
              <p>United Eco Nations</p>
              <p>Since 2024</p>
            </div>
            <div className={f.contact_icons_footer}>
              <a href="/">
                <FaMailBulk />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaTelegramPlane />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaTiktok />
              </a>
              <a href="/">
                <FaWhatsapp />
              </a>
              <a href="/">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
