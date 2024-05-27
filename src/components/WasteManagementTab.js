import React, { Component } from 'react'
import WasteManagementIMG from "../assets/WasteManagement.png"
import { FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { PiArrowFatLineUpLight } from "react-icons/pi";
import { PiArrowFatLineDownLight } from "react-icons/pi";

export default class WasteManagementTab extends Component {
    render() {
        return (
            <div>
                <div className='waste-tab'>
                    <div className='waste-banner'>
                        <img src={WasteManagementIMG} />
                        <h1>WasteManagement</h1>
                    </div>
                    <div className='waste-posts'>
                        <div className='post'>
                            <div className='post-top'>
                                <h1>DosCredoBank</h1>
                                <div className='editor-links'>
                                    <FiPhone className='editor-link-icon' />
                                    <FaInstagram className='editor-link-icon' />
                                    <LiaTelegramPlane className='editor-link-icon' />
                                    <FaWhatsapp className='editor-link-icon' />
                                    <IoMailOutline className='editor-link-icon' />
                                    <AiOutlineYoutube className='editor-link-icon' />
                                </div>
                                <div className='post-likes-dislikes'>
                                    <PiArrowFatLineUpLight />
                                    <p>0</p>
                                    <PiArrowFatLineDownLight />
                                </div>
                            </div>
                            <div className='post-desc'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
