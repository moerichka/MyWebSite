import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello, i'm</h5>
        <h1>Isakov Michail</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scrollDown">To contact me</a>
      </div>
    </header>
  );
};

export default Header;
