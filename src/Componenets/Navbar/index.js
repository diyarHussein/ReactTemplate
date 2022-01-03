import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { NavbarSection, Logo, LogoText, Ul, ListItems, AnchorLink } from "./style.js"



const Navbar = () => {
    return (
      <NavbarSection>
            
        <div className="container">
            
            <Logo>
                <LogoText>Ultra Profile</LogoText>
            </Logo>
            
            <Ul>
                <ListItems><Link className = {style.link} to="/">Home</Link></ListItems>
                <ListItems><AnchorLink to="#">Work</AnchorLink></ListItems>
                <ListItems><AnchorLink to="#">Portfolio</AnchorLink></ListItems>
                <ListItems><AnchorLink to="#">Resume</AnchorLink></ListItems>
                <ListItems><AnchorLink to="#">About</AnchorLink></ListItems>
                <ListItems><Link className= {style.link} to="/contact">Contact</Link></ListItems>
            </Ul>
            
        </div>
      
      </NavbarSection>
    );
}

export default Navbar;