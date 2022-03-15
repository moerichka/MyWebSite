import React from "react";
import "./nav.css";
import { SiHomeassistant } from "react-icons/si";
import { FiUser } from "react-icons/fi";
import { AiTwotoneExperiment } from "react-icons/ai";
import { MdMiscellaneousServices, MdMessage } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");
  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#header" ? "active" : ""}
      >
        <SiHomeassistant />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FiUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiTwotoneExperiment />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <MdMiscellaneousServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdMessage />
      </a>
    </nav>
  );
};

export default Nav;
