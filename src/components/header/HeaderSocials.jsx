import React from "react";
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitch} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/moerichka" target="_blank" rel="noreferrer"><BsGithub/></a>
      <a href="https://www.instagram.com/isakov_michail_/" target="_blank" rel="noreferrer"><BsInstagram/></a>
      <a href="https://www.twitch.tv/moerichka" target="_blank" rel="noreferrer"><BsTwitch/></a>
    </div>
  );
};

export default HeaderSocials;
