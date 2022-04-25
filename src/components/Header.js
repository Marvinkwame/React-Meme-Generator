import React from "react";
import logo from "../images/TrollFace.png";


export default function Header() {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="logo-image" />
            <h1 className="header-title">Meme Genearator</h1>
            <h4 className="header-subtitle">React Course - Project 3</h4>
        </header>
    )
}
