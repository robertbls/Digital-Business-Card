import React from "react";
import './App.css';
import { FaTwitterSquare, FaGithub, FaLinkedin} from "react-icons/fa";


export default function () {
    return (
        <div className="icons_footer">
            <a href="https://twitter.com" className="icon_twitter"> <FaTwitterSquare/> </a>
            <a href="https://tgithub.com" className="icon_github"><FaGithub/></a>
            <a href="https://linkedin.com" className="icon_linkedin"><FaLinkedin/></a>

        </div>
    )
}