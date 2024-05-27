import React, { Component } from 'react'
import example1 from "../assets/Bayel.png"
import { FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";

export default class VolunteerList extends Component {
    render() {
        return (
            <div>
                <div className='volunteers-tab'>
                    <div className='volunteers-h1'>
                        <h1>Volunteers</h1>
                    </div>
                    <div className='volunteer-cards'>
                        <div className='volunteer-card'>
                            <img src={example1}></img>
                            <h1>Name</h1>
                            <div className='volunteers-link-icons'>
                                <FiPhone className='volunteers-link-icon' />
                                <FaInstagram className='volunteers-link-icon' />
                                <LiaTelegramPlane className='volunteers-link-icon' />
                                <FaWhatsapp className='volunteers-link-icon' />
                                <IoMailOutline className='volunteers-link-icon' />
                                <AiOutlineYoutube className='volunteers-link-icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
