import React, { Component } from 'react'
import Mbank from "../assets/MBank.png"
import { FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";

export default class OrganizationCards extends Component {
    render() {
        return (
            <div>
                <div className='organization-cards'>
                    <div className='org-card'>
                        <div className='upper-card'>
                            <img src={Mbank} />
                            <div className='org-link-icons'>
                                <FiPhone className='org-link-icon'/>
                                <FaInstagram className='org-link-icon'/>
                                <LiaTelegramPlane className='org-link-icon'/>
                                <FaWhatsapp className='org-link-icon'/>
                                <IoMailOutline className='org-link-icon'/>
                                <AiOutlineYoutube className='org-link-icon'/>
                            </div>
                        </div>
                        <div className='lower-card'>
                            <h1>Organization name</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
