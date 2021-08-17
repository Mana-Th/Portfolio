import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { slide as Menu } from "react-burger-menu";

import '../assets/style.css';

function menu() {

return (
    <Menu right>
        <li><AnchorLink href="#home" class="nav_line">Top</AnchorLink></li>
        <li><AnchorLink href="#about" class="nav_line">About</AnchorLink></li>
        <li><AnchorLink href="#strengths" class="nav_line">Strengths</AnchorLink></li>
        <li><AnchorLink href="#skills" class="nav_line">Skills</AnchorLink></li>
    </Menu>
  );
}

export default menu;