import React from "react";
import logo from './profilepic1.jpg';
import './App.css';
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";


export default function () {
    return (
        <div className="section_info">
            <img className="profile-img"  src={logo}/>
            <h1 className="info--name">Robert Balasa</h1>
            <h2 className="info--role">Frontend Developer</h2>
            <a className="info--website" href="https://robertbls.github.io">robertbls.github.io</a>

            <div className="buttons">
            <a href="mailto:robertbls16@gmail.com" className="email"> <MdEmail className="svg_email"/> Email </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">

                <ImLinkedin className="svg_linkedin"/> LinkedIn</a>
            </div>
        </div>
    )}

