import React from 'react';
import logo from "../assets/logo.png";
// import college from "../assets/college.jpeg";
import "./header.css"
import { GoLocation } from "react-icons/go";
import { MdGroups } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { ImRocket } from "react-icons/im";
import { RiTestTubeFill } from "react-icons/ri";
import NavbarComponent from "./NavbarComponent"

const Card = ({bg,text,title,icon}) => {
    return(
        <div className={`${bg}_card header_card`}>
            <h2>{title}</h2>
            <div>
                {icon}
            </div>
            <p>{text}</p>
        </div>
    )
}
const Header = () => {
  return <div className="header">
      <div className="navtop">
          <div className="nav_logo">
              <img src={logo} alt="" className="nav_logo_img"/>
          </div>
            <div className="nav_address">
                <div className="text_add">
                    <p>Pondicherry Technological University</p>
                    <p>Pondicherry, India</p>
                </div>
                <div className="icon_container">
                        <GoLocation className="nav_icon" />
                </div>
                </div>          
      </div>
      <div className="navbottom">
          <NavbarComponent/>
      </div>
      <div className="text_middle">
            FORTIFYING WITH WISDOM
      </div>

      {/* <div className="header_cards">
            <Card bg="white" text=" sit amet consectetur adipisicing elit. Eos, optio quis rerum" title="RESEARCH" icon={<RiTestTubeFill />}/>
            <Card bg="red" text=" sit amet consectetur adipisicing elit. Eos, optio quis rerum" title="STARTUPS" icon={<ImRocket />}/>
            <Card bg="white" text=" sit amet consectetur adipisicing elit. Eos, optio quis rerum" title="NEWS" icon={<BiNews />}/>
            <Card bg="red" text=" sit amet consectetur adipisicing elit. Eos, optio quis rerum" title="CAMPUS LIFE" icon={<MdGroups />}/>
      </div> */}
  </div>;
};

export default Header;
