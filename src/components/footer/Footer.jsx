import React from 'react'
import "./footer.css"
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitch} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>IsakovM</a>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/moerichka"><BsGithub /><div> github</div></a>
        <a href="https://instagram/isakov_michail_"><BsInstagram /> <div>instagram</div></a>
        <a href="https://www.twitch.tv/moerichka"><BsTwitch /> <div>twitch</div></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Isakov Michail. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer